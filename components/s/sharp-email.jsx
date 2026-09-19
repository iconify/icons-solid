import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uzvno1w7h {
  fill: currentColor;
  d: path("M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z");
}
</style><path class="uzvno1w7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-email"} {...others} />);
}

export default Component;
