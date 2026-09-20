import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.kw83gyb8n {
  fill: currentColor;
  d: path("M10.617 3a3 3 0 0 0-2.559 1.433l-6.123 10a3 3 0 0 0 0 3.134l6.123 10A3 3 0 0 0 10.617 29h10.758a3 3 0 0 0 2.56-1.434l6.119-10a3 3 0 0 0 0-3.132l-6.12-10A3 3 0 0 0 21.375 3z");
}
</style><path class="kw83gyb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hexagon-32-filled"} {...others} />);
}

export default Component;
