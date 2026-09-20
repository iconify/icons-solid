import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6m3m_bnj {
  fill: currentColor;
  d: path("m19 16.15l-2-2V6h-2v6.15L5.85 3H15v1h4zm.8 6.45L15 17.8V21H3v-2h2V7.8L1.4 4.2l1.4-1.4l18.4 18.4z");
}
</style><path class="u6m3m_bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-meeting-room-sharp"} {...others} />);
}

export default Component;
