import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fubfzhbpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.88 3.63l3.49 3.49l.88.88l-.88.88l-3.49 3.49l-.88.88l-.88-.88l-3.49-3.49L6.75 8l.88-.88l3.49-3.49l.88-.88zM6.75 8H4.5v12.75M17.25 8h2.25v12.75M2.75 19l1.75 1.75L6.25 19m11.5 0l1.75 1.75L21.25 19");
}
</style><path class="fubfzhbpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:if-branch-sharp"} {...others} />);
}

export default Component;
