import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.py-2kccmu {
  fill: currentColor;
  d: path("M18 9V6h-3V4h3V1h2v3h3v2h-3v3zM8 21v-2H2V3h11.35q-.175.475-.262.975T13 5q0 2.5 1.75 4.25T19 11q.825 0 1.588-.213T22 10.2V19h-6v2z");
}
</style><path class="py-2kccmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:display-add-sharp"} {...others} />);
}

export default Component;
