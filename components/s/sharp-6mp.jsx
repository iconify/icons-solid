import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ece932bmi {
  fill: currentColor;
  d: path("M11.5 9H13v1.5h-1.5z");
}

.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.uvmx1sbop {
  fill: currentColor;
  d: path("M3 3v18h18V3zm7 2.5h4.5V7h-3v1h3v3.5H10zm2.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z");
}
</style><path class="k4n51fjcs"/><path class="uvmx1sbop"/><path class="ece932bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-6mp"} {...others} />);
}

export default Component;
