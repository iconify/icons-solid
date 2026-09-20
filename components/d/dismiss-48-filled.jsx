import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ikpza7gwb {
  fill: currentColor;
  d: path("M8.56 6.44a1.5 1.5 0 1 0-2.12 2.12L21.878 24L6.439 39.44a1.5 1.5 0 1 0 2.122 2.12L24 26.121L39.439 41.56a1.5 1.5 0 1 0 2.12-2.121L26.122 24l15.44-15.439A1.5 1.5 0 1 0 39.44 6.44L24 21.879z");
}
</style><path class="ikpza7gwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dismiss-48-filled"} {...others} />);
}

export default Component;
