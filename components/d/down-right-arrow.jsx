import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.udswgk8qa {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.25 98.18L44.51 89.9l14.18-14.18l-28.94-28.93l16.96-16.96l28.94 28.93l14.32-14.32z");
}
</style><path class="udswgk8qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:down-right-arrow"} {...others} />);
}

export default Component;
