import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aib9ci-xo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m10.707 7.293l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 9 16V8a1.002 1.002 0 0 1 1.707-.707");
}
</style><path class="aib9ci-xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:caret-right-bulk"} {...others} />);
}

export default Component;
