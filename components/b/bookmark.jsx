import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.d451uebmu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.245 17.667l3.755-4.2l3.755 4.2c.611.684 1.745.251 1.745-.667V3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666M6.5 14.38V4h7v10.381l-2.754-3.08a1 1 0 0 0-1.491 0z");
}
</style><path clip-rule="evenodd" class="d451uebmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:bookmark"} {...others} />);
}

export default Component;
