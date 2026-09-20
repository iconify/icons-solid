import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6tpxqbcu {
  fill: currentColor;
  d: path("M17.985 13L4.846 8.246l.316-.938L20 12.708V19H4v-6zm-7.831 3.5H17.5v-1h-7.346zm-3.923.27h1.538v-1.54H6.231z");
}
</style><path class="d6tpxqbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:scanner-sharp"} {...others} />);
}

export default Component;
