import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cptvh_bgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 5.25l1.5 1.5l2.75-3m-4.25 8l1.5 1.5l2.75-3m-4.25 8l1.5 1.5l2.75-3M11.5 5.5h9.75M11.5 12h9.75m-9.75 6.5h9.75");
}
</style><path class="cptvh_bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:checklist-sharp"} {...others} />);
}

export default Component;
