import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vg6h2rd1o {
  fill: currentColor;
  d: path("M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z");
}
</style><path class="vg6h2rd1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-keyboard-arrow-left"} {...others} />);
}

export default Component;
