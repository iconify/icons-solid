import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c7it4q6rl {
  d: path("M200 48v112L48 104Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.pwl96hbem {
  d: path("M40 104a8 8 0 0 1 5.23-7.5l152-56a8 8 0 0 1 5.53 15L71.14 104l131.62 48.49A8 8 0 0 1 200 168a8.1 8.1 0 0 1-2.77-.49l-152-56A8 8 0 0 1 40 104m160 88H48a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16");
}
</style><g class="cuyn6tgcc"><path class="c7it4q6rl"/><path class="pwl96hbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:less-than-or-equal-duotone"} {...others} />);
}

export default Component;
