import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.su0nl9s8z {
  fill: currentColor;
  d: path("M204.49 28a6 6 0 0 0-4.49-2H56a6 6 0 0 0-6 6.71l23.16 193A14 14 0 0 0 87.1 238h81.8a14 14 0 0 0 13.9-12.33L206 32.71a6 6 0 0 0-1.51-4.71m-11.25 10l-3.36 28H66.12l-3.36-28Zm-22.35 186.24a2 2 0 0 1-2 1.76H87.1a2 2 0 0 1-2-1.76L67.56 78h120.88Z");
}
</style><path class="su0nl9s8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pint-glass-light"} {...others} />);
}

export default Component;
