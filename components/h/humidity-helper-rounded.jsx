import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ksaltvb7v {
  fill: currentColor;
  d: path("M10 22q-3.325 0-5.663-2.3T2 14.1q0-1.575.613-3.012T4.35 8.55L8.6 4.375Q9.175 3.8 10 3.8t1.4.575l4.25 4.175q1.125 1.1 1.738 2.538T18 14.1q0 3.3-2.337 5.6T10 22Zm8.5-12q0-1.875-1.313-3.188T14 5.5q1.875 0 3.188-1.313T18.5 1q0 1.875 1.313 3.188T23 5.5q-1.875 0-3.188 1.313T18.5 10Z");
}
</style><path class="ksaltvb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:humidity-helper-rounded"} {...others} />);
}

export default Component;
