import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qh6bx5b9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 19.954l.319 10.062l8.944-18.261v23.372l9.157-29.6l-.266 36.946l9.689-29.227l-.426 23.584L42.5 19.315v7.72");
}
</style><path class="qh6bx5b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mivo"} {...others} />);
}

export default Component;
