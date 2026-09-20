import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z1fv-_b_d {
  fill: currentColor;
  d: path("M3.692 20L12 5.058L20.308 20zM5.4 19h6.1V8.021zm7.1 0h6.1L12.5 8.021z");
}
</style><path class="z1fv-_b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:details"} {...others} />);
}

export default Component;
