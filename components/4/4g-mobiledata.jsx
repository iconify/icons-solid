import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5rjs5drl {
  fill: currentColor;
  d: path("M7.5 16.5v-3h-4v-6h1v5h3v-5h1v5h2v1h-2v3zm13-5v3.385q0 .666-.475 1.14t-1.14.475h-4.77q-.666 0-1.14-.475t-.475-1.14v-5.77q0-.666.475-1.14t1.14-.475h4.924q.497 0 .902.27t.559.73h-6.384q-.27 0-.443.173t-.173.443v5.769q0 .269.173.442t.443.173h4.769q.269 0 .442-.173t.173-.442V12.5H17v-1z");
}
</style><path class="t5rjs5drl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:4g-mobiledata"} {...others} />);
}

export default Component;
