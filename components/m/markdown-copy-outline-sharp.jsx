import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xlyjxzmyk {
  fill: currentColor;
  d: path("M7 18V2h13v16zm2-2h9V4H9zm-6 6V6h2v14h11v2zm7.25-9h1.5V8.5h1v3h1.5v-3h1V13h1.5V7h-6.5zM9 16V4z");
}
</style><path class="xlyjxzmyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markdown-copy-outline-sharp"} {...others} />);
}

export default Component;
