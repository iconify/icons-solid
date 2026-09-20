import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l8jozbz-p {
  fill: currentColor;
  d: path("M228 172a32 32 0 0 1-64 0V68H92v132a4 4 0 0 1-8 0V68H72a44.05 44.05 0 0 0-44 44a4 4 0 0 1-8 0a52.06 52.06 0 0 1 52-52h152a4 4 0 0 1 0 8h-52v104a24 24 0 0 0 48 0a4 4 0 0 1 8 0");
}
</style><path class="l8jozbz-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pi-thin"} {...others} />);
}

export default Component;
