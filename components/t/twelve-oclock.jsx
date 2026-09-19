import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.nmgkj-bky {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V38h-4v-2.555c-1.19-.693-2-1.969-2-3.445s.81-2.752 2-3.445V6h4v22.555c1.19.693 2 1.969 2 3.445s-.81 2.752-2 3.445");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="nmgkj-bky"/><circle class="rt_37l3dj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:twelve-oclock"} {...others} />);
}

export default Component;
