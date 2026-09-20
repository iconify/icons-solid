import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vknozbczd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.62 11.377l-6.795 8.715m13.673 4.496a7.504 7.504 0 0 1-7.493 7.515a7.504 7.504 0 0 1-7.501-7.508v-.007a7.5 7.5 0 1 1 14.994 0m8.66-2.555l3.594 3.571l8.46-9.632m3.288 8.42c.002 6.752-5.34 12.229-11.933 12.23h-.008c-6.592-.001-11.935-5.478-11.933-12.23c0-6.754 5.344-12.229 11.937-12.229c6.591.002 11.933 5.476 11.933 12.228z");
}
</style><path class="vknozbczd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sixty60"} {...others} />);
}

export default Component;
