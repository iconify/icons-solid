import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.grydcvbea {
  fill: currentColor;
  d: path("M7.353 2.854a.5.5 0 0 0 0-.708L6.103.896a.5.5 0 0 0-.707.708l.402.401A4 4 0 0 0 2.9 8.529a.5.5 0 0 0 .774-.633a3 3 0 0 1 2.11-4.889l-.389.39a.5.5 0 1 0 .707.707zm.841.374a.5.5 0 0 0-.018.707a3 3 0 0 1-1.961 5.058l.389-.39a.5.5 0 1 0-.707-.707l-1.25 1.25a.5.5 0 0 0 0 .708l1.25 1.25a.5.5 0 0 0 .707-.708l-.402-.401a4 4 0 0 0 2.7-6.749a.5.5 0 0 0-.708-.018");
}
</style><path class="grydcvbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-sync-12-regular"} {...others} />);
}

export default Component;
