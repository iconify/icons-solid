import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vxbclqw6i {
  fill: currentColor;
  d: path("M8.5 17V7h7v1h-6v3.5h6v1h-6V16h6v1z");
}
</style><path class="vxbclqw6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:e-mobiledata-outline-sharp"} {...others} />);
}

export default Component;
