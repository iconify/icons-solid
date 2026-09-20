import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nt22mokac {
  fill: currentColor;
  d: path("M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-60V30h10a50.06 50.06 0 0 1 50 50m-82-50h10v76H62V80a50.06 50.06 0 0 1 50-50m32 196h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50");
}
</style><path class="nt22mokac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:mouse-light"} {...others} />);
}

export default Component;
