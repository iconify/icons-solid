import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ktd4nsb4o {
  fill: currentColor;
  d: path("M230 40a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h168a6 6 0 0 1 6 6m-48 32a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h144a6 6 0 0 0 6-6m-16 32a6 6 0 0 0-6-6H56a6 6 0 0 0 0 12h104a6 6 0 0 0 6-6m16 32a6 6 0 0 0-6-6H88a6 6 0 0 0 0 12h88a6 6 0 0 0 6-6m2 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-24 32h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-32 32h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12");
}
</style><path class="ktd4nsb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tornado-light"} {...others} />);
}

export default Component;
