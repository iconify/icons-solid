import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5ioyeh6f {
  fill: currentColor;
  d: path("M19 2H5v6h14zm-2 4H7V4h10zm5 16H2v-3h20zM18 9H6l-4 9h20zm-8 7H8v-1h2zm0-2H8v-1h2zm0-2H8v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2z");
}
</style><path class="c5ioyeh6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-point-of-sale"} {...others} />);
}

export default Component;
