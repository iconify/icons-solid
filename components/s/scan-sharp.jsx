import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cx-ciib0v {
  fill: currentColor;
  d: path("M14 8h4l-4-4zM5 21v-4.5h14V21zm-3.423-6.5v-1h20.846v1zM5 11.5V3h9.5L19 7.5v4z");
}
</style><path class="cx-ciib0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:scan-sharp"} {...others} />);
}

export default Component;
