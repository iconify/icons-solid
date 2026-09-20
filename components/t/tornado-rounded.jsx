import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwk7bvdji {
  fill: currentColor;
  d: path("M2.75 6L3.9 8h16.2l1.15-2q.575-1 .013-2t-1.738-1H4.475Q3.3 3 2.738 4t.012 2m2.3 4l1.75 3h10.4l1.75-3zm2.9 5l2.325 4q.575 1 1.725 1t1.725-1l2.325-4z");
}
</style><path class="fwk7bvdji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tornado-rounded"} {...others} />);
}

export default Component;
