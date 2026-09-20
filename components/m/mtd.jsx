import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1h0hhzfp {
  fill: var(--svg-color--ff1826, #ff1826);
  d: path("M3 16.5h13.5V3H21v18H3zM3 3h4.5v7.072H3zm6.429 0h4.5v7.072h-4.5z");
}
</style><path class="s1h0hhzfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mtd"} {...others} />);
}

export default Component;
