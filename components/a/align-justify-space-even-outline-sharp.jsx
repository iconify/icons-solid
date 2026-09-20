import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ay5js5b-p {
  fill: currentColor;
  d: path("M20 21V3h1v18zM3 21V3h1v18zm11.5-4.5v-9h2v9zm-7 0v-9h2v9z");
}
</style><path class="ay5js5b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-justify-space-even-outline-sharp"} {...others} />);
}

export default Component;
