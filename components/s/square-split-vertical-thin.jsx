import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.q-cshf5sf {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m144 152H56a4 4 0 0 1-4-4v-68h152v68a4 4 0 0 1-4 4");
}
</style><path class="q-cshf5sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-split-vertical-thin"} {...others} />);
}

export default Component;
