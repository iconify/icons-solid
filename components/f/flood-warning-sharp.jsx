import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.saw8itbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.47 3.12l6.31 5.01l.47.37v4.25H4.75V8.5l.47-.37l6.31-5.01l.47-.37zM2.75 16.75q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0m-18.52 3.5q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0");
}
</style><path class="saw8itbdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flood-warning-sharp"} {...others} />);
}

export default Component;
