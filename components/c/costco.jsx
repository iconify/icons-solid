import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kim5x0yei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7.607c-3.166-.916-6.76-1.42-10.34-1.42c-12.761 0-24.359 8.06-26.369 18.134c-1.964 9.845 6.21 17.492 18.622 17.492c2.83 0 8.802-.412 11.534-1.373l3.04-12.914c-2.934 1.97-6.068 3.206-9.706 3.206c-4.735 0-8.248-2.932-7.49-6.734c.75-3.754 5.213-6.732 9.946-6.732c3.58 0 6.435 1.604 8.601 3.48z");
}
</style><path class="kim5x0yei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:costco"} {...others} />);
}

export default Component;
