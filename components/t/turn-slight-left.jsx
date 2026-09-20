import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vw8m6y3kh {
  fill: currentColor;
  d: path("M13 20v-7.6l-5-5v2.25H6V4h5.65v2H9.4l5.025 5.025q.275.275.425.638t.15.762V20z");
}
</style><path class="vw8m6y3kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-slight-left"} {...others} />);
}

export default Component;
