import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ger3qfbnk {
  fill: currentColor;
  d: path("m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16");
}
</style><path class="ger3qfbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:magnifying-glass-minus-fill"} {...others} />);
}

export default Component;
