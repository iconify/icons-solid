import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zszcn1bot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 21.25c1.25-3 4.75-4.5 8.75-4.5s7.5 1.5 8.75 4.5Zm8.75-4.5v-5.5m0 0C11.75 8.5 10 7 7 7c.25 2.75 2 4.25 5 4.25m0 0C12.25 8.5 14 7 17 7c-.25 2.75-2 4.25-5 4.25");
}
</style><path class="zszcn1bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:seedling"} {...others} />);
}

export default Component;
