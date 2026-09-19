import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u152h8d3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.526 43.5c-5.865 0-10.236-3.017-10.236-10.237V21.702h-5.33V15.44c5.865-1.522 8.318-6.57 8.6-10.941h6.092v9.926h7.106v7.276h-7.106v10.067c0 3.017 1.523 4.06 3.947 4.06h3.441v7.67z");
}
</style><path class="u152h8d3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tumblr"} {...others} />);
}

export default Component;
