import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vp5husbny {
  fill: currentColor;
  d: path("M7 7.708V14.5q0 .214-.143.357T6.5 15t-.357-.143T6 14.5V6.808q0-.348.23-.578T6.808 6H14.5q.214 0 .357.143T15 6.5t-.143.357T14.5 7H7.708l10.938 10.939q.14.14.15.344t-.15.363t-.354.16t-.353-.16z");
}
</style><path class="vp5husbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:north-west-outline-rounded"} {...others} />);
}

export default Component;
