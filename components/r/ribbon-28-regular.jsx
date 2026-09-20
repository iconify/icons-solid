import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ceeyrjlwu {
  fill: currentColor;
  d: path("M14 2a8.5 8.5 0 0 1 6 14.52v8.73a.75.75 0 0 1-1.166.624L14 22.651l-4.834 3.223A.75.75 0 0 1 8 25.25v-8.73A8.5 8.5 0 0 1 14 2m4.5 15.709A8.46 8.46 0 0 1 14 19a8.46 8.46 0 0 1-4.5-1.291v6.14l4.084-2.723l.098-.055a.75.75 0 0 1 .734.055l4.084 2.723zM14 3.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14");
}
</style><path class="ceeyrjlwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ribbon-28-regular"} {...others} />);
}

export default Component;
