import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.onvaytb8m {
  fill: currentColor;
  d: path("M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm160 56H104v-40h56a8 8 0 0 0 8-8v-56h40Z");
}
</style><path class="onvaytb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:intersect-square-fill"} {...others} />);
}

export default Component;
