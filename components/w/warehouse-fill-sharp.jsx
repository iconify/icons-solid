import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yk-lqe-1m {
  fill: currentColor;
  d: path("M16 22v-5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v5H3a1 1 0 0 1 0-2h1V10c0-.379.214-.725.553-.894l6-3A1 1 0 0 1 11 6h2c.155 0 .308.036.447.106l6 3A1 1 0 0 1 20 10v10h1a1 1 0 0 1 0 2Zm0-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z");
}
</style><path class="yk-lqe-1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:warehouse-fill-sharp"} {...others} />);
}

export default Component;
