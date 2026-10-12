import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ys5_f_-fp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V7.5m0 0q2.6-2.38 0-4.75q-2.6 2.37 0 4.75Zm0 4q-.06-3.19-3.25-3q.06 3.19 3.25 3Zm0 0q3.19.19 3.25-3q-3.19-.19-3.25 3Zm0 5.75q-.06-3.19-3.25-3q.06 3.19 3.25 3Zm0 0q3.19.19 3.25-3q-3.19-.19-3.25 3Z");
}
</style><path class="ys5_f_-fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wheat-ear-sharp"} {...others} />);
}

export default Component;
