import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bj_jm--sd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-3.75 3.75-3.75q3.354 0 3.708 3h5.584q.354-3 3.708-3q3.75 0 3.75 3.75t-3.75 3.75q-3.354 0-3.708-3H9.208q-.354 3-3.708 3q-3.75 0-3.75-3.75");
}
</style><path class="bj_jm--sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:one-to-one"} {...others} />);
}

export default Component;
