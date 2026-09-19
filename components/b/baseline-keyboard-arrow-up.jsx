import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ibz29_uar {
  fill: currentColor;
  d: path("M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z");
}
</style><path class="ibz29_uar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-keyboard-arrow-up"} {...others} />);
}

export default Component;
