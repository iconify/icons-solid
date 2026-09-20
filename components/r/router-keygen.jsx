import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aqj0oqiek {
  cx: 24px;
  cy: 31.441px;
  r: 1.423px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dq5cc3pvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.126 42.11v-5.778H15.931m18.404 3.331v-3.331m-3.917-9.599a9.976 9.976 0 0 0-12.746-.035v.035m18.831-6.916a19.615 19.615 0 0 0-24.966 0m30.963-7.26a29 29 0 0 0-37 0");
}

.n919egbim {
  cx: 12.902px;
  cy: 36.332px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="n919egbim"/><path class="dq5cc3pvl"/><circle class="aqj0oqiek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:router-keygen"} {...others} />);
}

export default Component;
