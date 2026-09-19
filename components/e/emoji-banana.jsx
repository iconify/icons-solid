import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h696n-bxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.377 39.33c12.459-2.167 18.24-8.308 19.897-20.203");
}

.v1z4sobvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.603 37.45c-6.047 5.378-17.196 7.047-24.193 2.056l-.31-1.418c13.742-1.645 24.455-10.41 26.38-26.51c.824-.003 3.465-.295 3.465-.295c4.177 11.26 1.309 20.246-5.344 26.16zm3.395-28.74l-.425-3.2m.425 3.2l.28 2.742");
}
</style><path class="h696n-bxq"/><path class="v1z4sobvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-banana"} {...others} />);
}

export default Component;
