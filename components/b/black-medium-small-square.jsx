import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.k9jca4tfl {
  fill: var(--svg-color--212121, #212121);
  d: path("M40.03 40.02h47.95v47.95H40.03z");
}
</style><path class="k9jca4tfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:black-medium-small-square"} {...others} />);
}

export default Component;
