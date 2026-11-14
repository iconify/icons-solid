import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ejvvuibyg {
  fill: currentColor;
  d: path("M25.5 20a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-19A3.5 3.5 0 0 1 3 25.5v-2a3.5 3.5 0 0 1 2.64-3.395l-.076.332a2.5 2.5 0 0 0 2.999 2.999l5.94-1.37a4.5 4.5 0 0 0 2.17-1.204l.863-.862z");
}
</style><path class="ejvvuibyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:color-line-accent-32-light"} {...others} />);
}

export default Component;
