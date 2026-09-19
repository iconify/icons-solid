import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ujh7qlb-p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M4.5 9v21h3v-6h3v6h33V9h-3v3h-10v6h-20v-6h-3V9zm6 24v6h27v-6z");
}
</style><path class="ujh7qlb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:periodic-table-alt"} {...others} />);
}

export default Component;
