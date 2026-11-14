import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eqm1lxbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.503 17.411C7.486 15.505 3.654 10.704 3.25 5.25C3.25 4 3.75 3 4.5 3h3L9 7L7 8.5C8 11 10 13 12.5 14l1.5-2l1.207.453m.043 8.047V18c0-1.5 1.25-2.75 2.75-2.75s2.75 1.25 2.75 2.75v2.5m-6.5.25h7.5m-3.75-8v.75");
}
</style><path class="eqm1lxbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:emergency-call"} {...others} />);
}

export default Component;
