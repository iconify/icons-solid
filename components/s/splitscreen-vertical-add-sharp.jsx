import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1u2c-bcj {
  fill: currentColor;
  d: path("M4 20V4h6.635v16zm9.385 0V4H20v10.427q-.154-.021-.308-.032q-.153-.01-.307-.01q-2.075 0-3.538 1.455t-1.462 3.539q0 .166.015.316t.027.305zM19 22.23V20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23z");
}
</style><path class="o1u2c-bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-vertical-add-sharp"} {...others} />);
}

export default Component;
