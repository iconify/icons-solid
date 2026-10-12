import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_yu4ob_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25c3.75 0 6.25 3.75 6.25 8.75s-2.5 8.75-6.25 8.75S5.75 17 5.75 12S8.25 3.25 12 3.25ZM8.75 12h6.5");
}
</style><path class="q_yu4ob_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:theta-sharp"} {...others} />);
}

export default Component;
