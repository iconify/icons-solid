import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zz8tfwjtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25c4.5 0 6.75 2.75 6.75 6S15.5 15 13.25 17.5h-2.5c-2.25-2.5-5.5-5-5.5-8.25s2.25-6 6.75-6m-6.2 8.3h12.4M12 17.5v3.75M9.25 19.5h5.5");
}
</style><path class="zz8tfwjtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:separatory-funnel"} {...others} />);
}

export default Component;
