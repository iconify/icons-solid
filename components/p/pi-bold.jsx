import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.il0pcw8no {
  fill: currentColor;
  d: path("M236 172a40 40 0 0 1-80 0V76h-56v124a12 12 0 0 1-24 0V76h-4a36 36 0 0 0-36 36a12 12 0 0 1-24 0a60.07 60.07 0 0 1 60-60h152a12 12 0 0 1 0 24h-44v96a16 16 0 0 0 32 0a12 12 0 0 1 24 0");
}
</style><path class="il0pcw8no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pi-bold"} {...others} />);
}

export default Component;
