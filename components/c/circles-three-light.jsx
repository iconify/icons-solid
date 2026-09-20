import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vhyaqjb0n {
  fill: currentColor;
  d: path("M170 76a42 42 0 1 0-42 42a42 42 0 0 0 42-42m-42 30a30 30 0 1 1 30-30a30 30 0 0 1-30 30m60 24a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30M68 130a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30");
}
</style><path class="vhyaqjb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circles-three-light"} {...others} />);
}

export default Component;
