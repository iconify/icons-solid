import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lm8tt1b3g {
  d: path("M93.365 0L0 93.741l34.258 128.376L163.011 256L256 161.882L222.117 35.388zM6.776 95.247l124.988-32.754l-34.258 124.612z");
}
</style><path class="lm8tt1b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:crystal"} {...others} />);
}

export default Component;
