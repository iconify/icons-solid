import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ozkzalbna {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 5q0-3.25 3.25-3.25T8.25 5q0 2.817-2.443 3.192q.26 1.477 1.696 2.143q1.2.557 4.577.919q3.623.388 5.048 1.05q2.299 1.068 2.582 3.49q2.54.333 2.54 3.206q0 3.25-3.25 3.25T15.75 19q0-2.817 2.443-3.192q-.26-1.477-1.696-2.143q-1.2-.557-4.577-.919q-3.623-.388-5.048-1.05q-2.299-1.068-2.582-3.49Q1.75 7.873 1.75 5");
}
</style><path class="ozkzalbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:wire"} {...others} />);
}

export default Component;
