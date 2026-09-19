import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.anhokz9eq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.47 4.5a12.138 12.138 0 0 0 0 24.277h7.196V4.5Z");
}

.e4xbwufyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.334 16.638V43.5h7.196a12.137 12.137 0 0 0 12.136-12.138V16.638");
}
</style><path class="anhokz9eq"/><path class="e4xbwufyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sesame"} {...others} />);
}

export default Component;
