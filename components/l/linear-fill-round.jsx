import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.im7ik3b6n {
  fill: currentColor;
  d: path("M17.293 19.415L4.585 6.707a1 1 0 0 1-.038-1.374a9.998 9.998 0 0 1 17.449 6.945a10 10 0 0 1-3.329 7.175a1 1 0 0 1-1.374-.038m-2.257.571a.999.999 0 1 1-1.414 1.414L2.6 10.378a.999.999 0 1 1 1.414-1.414Zm-6.248-.591a.999.999 0 1 1-1.414 1.414l-4.183-4.183a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="im7ik3b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:linear-fill-round"} {...others} />);
}

export default Component;
