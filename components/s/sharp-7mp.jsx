import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cb1giyb6m {
  fill: currentColor;
  d: path("M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm-1.25-7L12.62 7H10V5.5h4.87l-1.87 6zM18 17h-3v1.5h-1.5v-6H18z");
}

.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}
</style><path class="k4n51fjcs"/><path class="cb1giyb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-7mp"} {...others} />);
}

export default Component;
