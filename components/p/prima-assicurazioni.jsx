import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a7yaoelgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.508 14.166l5.924-2.752V38.74m0-13.663c0 3.562 8.794 5.797 12.798 2.487c2.625-2.17 2.263-4.639 2.218-7.875c-.05-3.466.23-7.498-2.779-9.237c-4.724-2.73-9.277.047-9.277.047");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="a7yaoelgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:prima-assicurazioni"} {...others} />);
}

export default Component;
