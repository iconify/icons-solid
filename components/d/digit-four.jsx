import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.c4isc5bus {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m12 39.586h-4.145V48h-6.193v-6.414H20v-5.348L34.48 16h5.375v20.217H44z");
}

.saalkpjmt {
  fill: currentColor;
  d: path("M33.662 36.217V25.326l-7.674 10.891z");
}
</style><path class="saalkpjmt"/><path class="c4isc5bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:digit-four"} {...others} />);
}

export default Component;
