import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.k2t-f_ntu {
  fill: var(--svg-color--f79229, #f79229);
  d: path("M69 2H58c-1.1 0-2 .9-2 2v30H29c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h27v75c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V49h28c1.1 0 2-.9 2-2V36c0-1.1-.9-2-2-2H71V4c0-1.1-.9-2-2-2");
}
</style><path class="k2t-f_ntu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:latin-cross"} {...others} />);
}

export default Component;
