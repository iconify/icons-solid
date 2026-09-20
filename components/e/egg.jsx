import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.azrrhzblj {
  fill: var(--svg-color--efb78e, #efb78e);
  d: path("M100.33 30.17c.3 18.78-4.39 39.85-16.99 55.16c-18.91 22.99-49.4 20.24-60.93 14.81c8.16 15.71 24.05 24.09 41.59 24.09c25.41 0 47.36-17.57 47.36-49.56c0-16.64-4.21-32.21-11.03-44.5");
}

.t4pu7_bgw {
  fill: var(--svg-color--f8d8c0, #f8d8c0);
  d: path("M64 3.78c-25.09 0-47.36 32.62-47.36 70.89c0 31.99 21.96 49.56 47.36 49.56s47.36-17.57 47.36-49.56C111.36 36.4 89.09 3.78 64 3.78");
}
</style><path class="t4pu7_bgw"/><path class="azrrhzblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:egg"} {...others} />);
}

export default Component;
