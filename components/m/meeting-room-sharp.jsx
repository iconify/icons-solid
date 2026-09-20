import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w670zknqi {
  fill: currentColor;
  d: path("M4.5 20v-1h2V4h8v1h3v14h2v1h-3V6h-2v14zm7.54-7.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23");
}
</style><path class="w670zknqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:meeting-room-sharp"} {...others} />);
}

export default Component;
