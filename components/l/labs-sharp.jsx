import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1g50do1t {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.537-1.463T7 17V8H5V2h14v6h-2v9q0 2.075-1.463 3.538T12 22m2.125-2.875Q15 18.25 15 17h-3v-2h3v-2h-3v-2h3V8H9v9q0 1.25.875 2.125T12 20t2.125-.875");
}
</style><path class="j1g50do1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:labs-sharp"} {...others} />);
}

export default Component;
