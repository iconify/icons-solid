import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5qk1gqvw {
  fill: currentColor;
  d: path("m12 21l-5-9.02L12 3l5 8.98z");
}
</style><path class="c5qk1gqvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hov"} {...others} />);
}

export default Component;
