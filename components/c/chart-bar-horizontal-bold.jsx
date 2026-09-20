import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.idbogsb_c {
  fill: currentColor;
  d: path("M224 92h-36V56a12 12 0 0 0-12-12H60v-4a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-4h84a12 12 0 0 0 12-12v-36h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-60-24v24H60V68Zm-32 120H60v-24h72Zm80-48H60v-24h152Z");
}
</style><path class="idbogsb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-bar-horizontal-bold"} {...others} />);
}

export default Component;
