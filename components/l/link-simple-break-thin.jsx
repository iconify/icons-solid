import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t_sewqbak {
  fill: currentColor;
  d: path("m212.79 116.77l-30.07 30.06a4 4 0 1 1-5.66-5.66l30.07-30.06a44 44 0 0 0-62.24-62.24l-30.07 30.06a4 4 0 0 1-5.65-5.66l30.06-30.06a52 52 0 0 1 73.56 73.56m-71.62 60.29l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66");
}
</style><path class="t_sewqbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:link-simple-break-thin"} {...others} />);
}

export default Component;
