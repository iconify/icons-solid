import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e850otbxv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v9h10z");
}

.t-y0e6kia {
  fill: currentColor;
  d: path("M7 13v9h10v-9z");
}
</style><path class="e850otbxv"/><path class="t-y0e6kia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-50"} {...others} />);
}

export default Component;
