import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yxc0jnb5x {
  fill: currentColor;
  d: path("M166 128a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m54-114v160a30 30 0 0 1-30 30H72a30 30 0 0 1-30-30V40a6 6 0 0 1 6-6h26V24a6 6 0 0 1 12 0v10h36V24a6 6 0 0 1 12 0v10h36V24a6 6 0 0 1 12 0v10h26a6 6 0 0 1 6 6m-12 6h-20v10a6 6 0 0 1-12 0V46h-36v10a6 6 0 0 1-12 0V46H86v10a6 6 0 0 1-12 0V46H54v154a18 18 0 0 0 18 18h112a18 18 0 0 0 18-18Z");
}
</style><path class="yxc0jnb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notepad-light"} {...others} />);
}

export default Component;
