import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aamelab0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 12.75V5a2.25 2.25 0 0 1 4.5 0v7.75a4.25 4.25 0 1 1-4.5 0ZM9 7v8.5m6.5-8.75c-1 1 1 2.25 0 3.25s1 2.25 0 3.25m4-6.5c-1 1 1 2.25 0 3.25s1 2.25 0 3.25");
}
</style><path class="aamelab0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fever-sharp"} {...others} />);
}

export default Component;
