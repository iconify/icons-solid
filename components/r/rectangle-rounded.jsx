import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhh-neolc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 4.75h6q3.003 0 5.127 2.123T22.25 12t-2.123 5.127Q18.003 19.25 15 19.25H9q-3.003 0-5.127-2.123T1.75 12t2.123-5.127Q5.997 4.75 9 4.75");
}
</style><path class="dhh-neolc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:rectangle-rounded"} {...others} />);
}

export default Component;
