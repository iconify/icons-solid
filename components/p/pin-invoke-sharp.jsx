import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mtpzacc4d {
  fill: currentColor;
  d: path("M2 20V4h12v2H4v12h16v-6h2v8zm8.05-3.625l-1.4-1.425L11.6 12H9.35v-2H15v5.65h-2v-2.225zM19 10q-1.25 0-2.125-.875T16 7t.875-2.125T19 4t2.125.875T22 7t-.875 2.125T19 10");
}
</style><path class="mtpzacc4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pin-invoke-sharp"} {...others} />);
}

export default Component;
