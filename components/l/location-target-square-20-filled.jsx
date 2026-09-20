import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.pznhb-sta {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1.5 7a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m-.965.5H6a.5.5 0 0 1 0-1h.535A3.5 3.5 0 0 1 9.5 6.535V6a.5.5 0 0 1 1 0v.535A3.5 3.5 0 0 1 13.465 9.5H14a.5.5 0 0 1 0 1h-.535a3.5 3.5 0 0 1-2.965 2.965V14a.5.5 0 0 1-1 0v-.535A3.5 3.5 0 0 1 6.535 10.5m4.715-.5a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0");
}
</style><path class="pznhb-sta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:location-target-square-20-filled"} {...others} />);
}

export default Component;
