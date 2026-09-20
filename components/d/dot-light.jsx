import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l_trz_fti {
  fill: currentColor;
  d: path("M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="l_trz_fti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dot-light"} {...others} />);
}

export default Component;
