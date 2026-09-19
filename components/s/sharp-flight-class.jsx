import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.icrmcws_t {
  fill: currentColor;
  d: path("M18 4h-6v9h6zM9.5 16H18v2H8L5 8V4h2v4zM8 19h10v2H8z");
}
</style><path class="icrmcws_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-flight-class"} {...others} />);
}

export default Component;
