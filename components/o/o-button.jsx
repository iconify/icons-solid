import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ttdo8acwz {
  fill: currentColor;
  d: path("M32 21.053c-6.036 0-10.947 4.91-10.947 10.947c0 6.035 4.911 10.947 10.947 10.947S42.947 38.035 42.947 32c0-6.037-4.911-10.947-10.947-10.947");
}

.vf4d7ebea {
  fill: currentColor;
  d: path("M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10M32 48c-8.822 0-16-7.178-16-16c0-8.82 7.178-16 16-16s16 7.18 16 16c0 8.822-7.178 16-16 16");
}
</style><path class="ttdo8acwz"/><path class="vf4d7ebea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:o-button"} {...others} />);
}

export default Component;
