import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4pm-6_gh {
  fill: currentColor;
  d: path("M5.5 18V6h2v12zm13 0l-9-6l9-6z");
}
</style><path class="h4pm-6_gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:skip-previous"} {...others} />);
}

export default Component;
