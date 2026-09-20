import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sycvawb1d {
  fill: var(--svg-color--1857f5, #1857f5);
  d: path("m3 12l9-9l9 9l-9 9z");
}
</style><path class="sycvawb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:waves"} {...others} />);
}

export default Component;
