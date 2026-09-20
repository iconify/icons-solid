import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jldmbcuvp {
  fill: currentColor;
  d: path("M192 20a12 12 0 0 0-12 12v28H76V32a12 12 0 0 0-24 0v192a12 12 0 0 0 24 0v-28h104v28a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-12 64v32H76V84ZM76 172v-32h104v32Z");
}
</style><path class="jldmbcuvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ladder-simple-bold"} {...others} />);
}

export default Component;
