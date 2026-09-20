import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.k4mkn2j9h {
  fill: currentColor;
  d: path("M2.68 3.388A3.5 3.5 0 0 0 7.112 7.82l.732.73A4 4 0 0 1 6 9a4 4 0 0 1-2-.535V10.5a.5.5 0 0 0 .777.416L6 10.101l1.223.815A.5.5 0 0 0 8 10.5V8.707l2.146 2.147a.5.5 0 0 0 .708-.708l-9-9a.5.5 0 1 0-.708.708zM9.5 4.5c0 .808-.274 1.552-.734 2.145l-4.91-4.911A3.5 3.5 0 0 1 9.5 4.5");
}
</style><path class="k4mkn2j9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ribbon-off-12-filled"} {...others} />);
}

export default Component;
