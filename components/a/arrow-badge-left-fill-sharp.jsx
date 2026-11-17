import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ppefwwbqm {
  fill: currentColor;
  d: path("m10.293 19.707l-7-7a1 1 0 0 1 0-1.414l7-7A1 1 0 0 1 11 4h9a1.002 1.002 0 0 1 .707 1.707L14.414 12l6.293 6.293A1 1 0 0 1 20 20h-9a1 1 0 0 1-.707-.293");
}
</style><path class="ppefwwbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-left-fill-sharp"} {...others} />);
}

export default Component;
