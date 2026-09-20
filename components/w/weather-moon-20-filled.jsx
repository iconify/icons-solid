import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.eyd--fbfv {
  fill: currentColor;
  d: path("M16.36 13.997a7.98 7.98 0 0 1-13.485.541a.6.6 0 0 1 .292-.903c3.006-1.076 4.616-2.323 5.55-4.107c.984-1.877 1.238-3.934.55-6.753a.6.6 0 0 1 .614-.74a7.98 7.98 0 0 1 6.478 11.962");
}
</style><path class="eyd--fbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:weather-moon-20-filled"} {...others} />);
}

export default Component;
