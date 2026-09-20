import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.no2n9kc0p {
  fill: currentColor;
  d: path("M216 44h-48a4 4 0 0 0 0 8h20v140.43L107.5 46.07A4 4 0 0 0 104 44H40a4 4 0 0 0 0 8h20v152H40a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8H68V63.57l80.5 146.36A4 4 0 0 0 152 212h40a4 4 0 0 0 4-4V52h20a4 4 0 0 0 0-8M70.77 52h30.86l83.6 152h-30.86Z");
}
</style><path class="no2n9kc0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notion-logo-thin"} {...others} />);
}

export default Component;
