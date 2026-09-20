import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.pknz56bsu {
  fill: currentColor;
  d: path("M6 1q.417 0 .816.066l-.936.936a4 4 0 1 0 4.118 4.124l.937-.936Q11 5.585 11 6a5 5 0 1 1-5-5m4.441.562a1.914 1.914 0 0 0-2.707 0L5.15 4.146a.5.5 0 0 0-.12.194l-.984 2.92a.55.55 0 0 0 .696.697l2.92-.982a.5.5 0 0 0 .195-.12l2.584-2.585a1.914 1.914 0 0 0 0-2.707");
}
</style><path class="pknz56bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:status-12-filled"} {...others} />);
}

export default Component;
