import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vu0y08qjr {
  fill: currentColor;
  d: path("M248 66H8a6 6 0 0 0 0 12h10v114a6 6 0 0 0 12 0v-50h196v50a6 6 0 0 0 12 0V78h10a6 6 0 0 0 0-12M30 78h92v52H30Zm196 52h-92V78h92ZM94 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m68 0a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6");
}
</style><path class="vu0y08qjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:desk-light"} {...others} />);
}

export default Component;
