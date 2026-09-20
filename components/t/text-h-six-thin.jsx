import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g2rk93bxt {
  fill: currentColor;
  d: path("M212 148a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.25 54a1 1 0 0 0-.08.17A32 32 0 1 0 212 148m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0");
}
</style><path class="g2rk93bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-h-six-thin"} {...others} />);
}

export default Component;
