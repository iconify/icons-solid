import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wt594-ldn {
  fill: currentColor;
  d: path("M10.5 15.808V8.192L14.308 12z");
}
</style><path class="wt594-ldn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-right-outline"} {...others} />);
}

export default Component;
