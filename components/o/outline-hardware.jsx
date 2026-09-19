import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yrfw69ysx {
  fill: currentColor;
  d: path("m18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3zm-5 16h-2v-6h2zm-2-8V6H6.77C7.32 5.39 8.11 5 9 5h4v6z");
}
</style><path class="yrfw69ysx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-hardware"} {...others} />);
}

export default Component;
