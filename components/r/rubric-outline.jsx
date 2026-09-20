import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_0cvibso {
  fill: currentColor;
  d: path("M5 20.039V3.961h14V12.5H6v2.77h5.5v1H6v2.769h5.5v1zm10.4 0l-2.108-2.108l.708-.708l1.4 1.4l3.55-3.55l.708.708zM6 11.5h5.5V8.73H6zm6.5 0H18V8.73h-5.5zM6 7.73h5.5V4.963H6zm6.5 0H18V4.963h-5.5z");
}
</style><path class="t_0cvibso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:rubric-outline"} {...others} />);
}

export default Component;
