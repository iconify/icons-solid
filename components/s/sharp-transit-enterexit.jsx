import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4sjqob7l {
  fill: currentColor;
  d: path("M16 18H6V8h3v4.77L15.98 6L18 8.03L11.15 15H16z");
}
</style><path class="d4sjqob7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-transit-enterexit"} {...others} />);
}

export default Component;
