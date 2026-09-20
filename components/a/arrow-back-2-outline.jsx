import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5hlx-bla {
  fill: currentColor;
  d: path("M16 19L5 12l11-7zm-2-3.65v-6.7L8.75 12z");
}
</style><path class="k5hlx-bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-back-2-outline"} {...others} />);
}

export default Component;
