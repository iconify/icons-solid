import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nly9ushkk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.602 5.622Q10.694 3.75 12 3.75t2.398 1.872l6.007 10.762q1.088 1.866.43 2.994Q20.181 20.5 18 20.5H6q-2.181 0-2.835-1.122q-.658-1.128.437-3.006L9.595 5.634z");
}
</style><path class="nly9ushkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:triangle-rounded"} {...others} />);
}

export default Component;
