import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mq31jvb5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c11.872 0 21.497 9.624 21.497 21.497c0 3.554-.863 6.907-2.39 9.86h0C40.885 25.382 33.172 19.129 24 19.129M24 45.5c-11.872 0-21.497-9.624-21.497-21.497c0-3.554.863-6.907 2.39-9.86h0C7.115 22.618 14.828 28.871 24 28.871");
}

.qz-j4nozx {
  cx: 24px;
  cy: 37.182px;
  r: 8.318px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v1zu3mb9h {
  cx: 24px;
  cy: 10.818px;
  r: 8.318px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="v1zu3mb9h"/><circle class="qz-j4nozx"/><path class="mq31jvb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:duet"} {...others} />);
}

export default Component;
