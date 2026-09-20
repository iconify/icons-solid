import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tnlnbjdhf {
  fill: currentColor;
  d: path("M5 20q-.639 0-.908-.57t.127-1.065L10 11.346V5H8.616q-.213 0-.357-.144t-.143-.357t.143-.356T8.616 4h6.769q.212 0 .356.144t.144.357t-.144.356t-.356.143H14v6.346l5.78 7.02q.397.494.128 1.064T19 20z");
}
</style><path class="tnlnbjdhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:science"} {...others} />);
}

export default Component;
