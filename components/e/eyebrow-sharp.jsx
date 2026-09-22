import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2l0v9box {
  fill: currentColor;
  d: path("M15 14q-.775 0-1.937.238t-2.726.725T6.8 16.175T2.375 17.9L1 16.975V8.95q3.45-.675 6.963-1.312T15 7q3.1 0 5.313 2.488T23.025 16l-1.775.675q-1.6-1.25-3.275-1.963T15 14");
}
</style><path class="d2l0v9box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eyebrow-sharp"} {...others} />);
}

export default Component;
