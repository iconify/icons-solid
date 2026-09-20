import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5jpchb1h {
  fill: currentColor;
  d: path("M5 11q-.402 0-.701-.299T4 10V5q0-.402.299-.701T5 4h5q.402 0 .701.299T11 5v5q0 .402-.299.701T10 11zm0 9q-.402 0-.701-.299T4 19v-5q0-.402.299-.701T5 13h5q.402 0 .701.299T11 14v5q0 .402-.299.701T10 20zm9-9q-.402 0-.701-.299T13 10V5q0-.402.299-.701T14 4h5q.402 0 .701.299T20 5v5q0 .402-.299.701T19 11zm0 9q-.402 0-.701-.299T13 19v-5q0-.402.299-.701T14 13h5q.402 0 .701.299T20 14v5q0 .402-.299.701T19 20z");
}
</style><path class="f5jpchb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grid-view-rounded"} {...others} />);
}

export default Component;
