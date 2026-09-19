import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhef3cc6i {
  fill: currentColor;
  d: path("M6 6h2v12H6zm3.5 6l8.5 6V6z");
}
</style><path class="yhef3cc6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-skip-previous"} {...others} />);
}

export default Component;
