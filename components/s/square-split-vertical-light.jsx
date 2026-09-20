import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m6-xnebam {
  fill: currentColor;
  d: path("M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2m144 148H56a2 2 0 0 1-2-2v-66h148v66a2 2 0 0 1-2 2");
}
</style><path class="m6-xnebam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-split-vertical-light"} {...others} />);
}

export default Component;
