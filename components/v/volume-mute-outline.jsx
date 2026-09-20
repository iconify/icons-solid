import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcrdwxboq {
  fill: currentColor;
  d: path("M8 14v-4h3.423L15 6.423v11.154L11.423 14zm1-1h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1");
}
</style><path class="fcrdwxboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:volume-mute-outline"} {...others} />);
}

export default Component;
