import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m9z1lw_eh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.21 32.84V14.76l-6.75 8.56l-.72.84l-2.17 2.77H37.5m-27-6.14a6 6 0 0 1 6-6a6 6 0 0 1 6 6A5.33 5.33 0 0 1 20.75 25c-2.42 2.16-10.25 7.83-10.25 7.83h11.93");
}
</style><path class="m9z1lw_eh"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:just24hours"} {...others} />);
}

export default Component;
