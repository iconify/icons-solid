import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.r46raqjju {
  fill: currentColor;
  d: path("M206 56v144a6 6 0 0 1-12 0v-66H62v66a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v66h132V56a6 6 0 0 1 12 0");
}
</style><path class="r46raqjju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-h-light"} {...others} />);
}

export default Component;
