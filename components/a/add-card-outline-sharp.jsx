import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ww04fib-w {
  fill: currentColor;
  d: path("M3 19V5h18v6.192H4V18h9.192v1zM4 8.808h16V6H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4 18V6z");
}
</style><path class="ww04fib-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-card-outline-sharp"} {...others} />);
}

export default Component;
