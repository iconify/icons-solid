import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-7ea3bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.25h18.5v4.5H2.75zM5 9.75v8.5m2.5-8.5v9.5m2.5-9.5v9.5m2.5-9.5v9.5m2.5-9.5v9.5m2.5-9.5v9.5m2.5-9.5v8.5");
}
</style><path class="p-7ea3bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:comb-sharp"} {...others} />);
}

export default Component;
