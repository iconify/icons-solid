import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-gjwwbyp {
  fill: currentColor;
  d: path("m12 18l-6-6l1.4-1.4l3.6 3.6V5h2v9.2l3.6-3.6L18 12z");
}
</style><path class="i-gjwwbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-downward-alt-sharp"} {...others} />);
}

export default Component;
