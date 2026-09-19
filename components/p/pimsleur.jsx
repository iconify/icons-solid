import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eawe5egnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.013 20.513a16.013 16.013 0 0 0-32.026 0c0 8.844 6.572 16.992 16.013 22.987c0-7.389 16.013-8.51 16.013-22.987");
}

.x22dzqqzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.843 8.73A24.33 24.33 0 0 0 19.85 30.785A24.9 24.9 0 0 0 24 43.5c.112-7.949 5.507-18.322 15.987-22.023");
}
</style><path class="eawe5egnc"/><path class="x22dzqqzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pimsleur"} {...others} />);
}

export default Component;
