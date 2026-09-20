import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z9vf9zb7r {
  fill: currentColor;
  d: path("M4 22V8l6-6h10v20zm5-11h2V7H9zm3 0h2V7h-2zm3 0h2V7h-2z");
}
</style><path class="z9vf9zb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sd-card-sharp"} {...others} />);
}

export default Component;
