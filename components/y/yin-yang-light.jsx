import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kcyidqamm {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M38 128a90.1 90.1 0 0 1 90-90a42 42 0 0 1 0 84a54 54 0 0 0-44.88 84A90.06 90.06 0 0 1 38 128m90 90a42 42 0 0 1 0-84a54 54 0 0 0 44.88-84A90 90 0 0 1 128 218m10-42a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-20-96a10 10 0 1 1 10 10a10 10 0 0 1-10-10");
}
</style><path class="kcyidqamm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:yin-yang-light"} {...others} />);
}

export default Component;
