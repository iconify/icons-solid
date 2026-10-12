import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ge02bkoyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5.75c-1.75-.75-2.5-3-.75-3s1.5 1.75.75 3m12 0c1.75-.75 2.5-3 .75-3s-1.5 1.75-.75 3M7.77 6.76l.56 2.01l.33 1.16l-1.16.32l-.56.16l-1.16.32l-.33-1.16l-.56-2.01l-.33-1.16l1.16-.32l.56-.16l1.16-.32zm9.95-.84l.56.16l1.16.32l-.33 1.16l-.56 2.01l-.33 1.16l-1.16-.32l-.56-.16l-1.16-.32l.33-1.16l.56-2.01l.33-1.16zm-10.5 4.41L10 20.25m6.78-9.92L14 20.25m-11.25 0h18.5");
}
</style><path class="ge02bkoyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trekking-poles-sharp"} {...others} />);
}

export default Component;
