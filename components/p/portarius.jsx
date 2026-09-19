import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ee56u7b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.987 13.984c4.333 0 8.212 2.394 8.212 7.731v12.301m5.395-20.032v12.13c-.088 4.629 4.227 7.902 7.25 7.902");
}

.gci9zjboy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 34.016h30.822c5.237.031 8.223-5.081 8.178-10.267v-9.765H12.162c-3.865 0-7.662 2.903-7.662 9.765z");
}
</style><path class="gci9zjboy"/><path class="ee56u7b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:portarius"} {...others} />);
}

export default Component;
