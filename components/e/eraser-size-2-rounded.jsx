import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uucwhfbok {
  fill: currentColor;
  d: path("M7.75 19.25q-1.25 0-2.125-.875T4.75 16.25q0-.575.225-1.137t.65-.988l8.5-8.5q.425-.425.988-.65t1.137-.225q1.25 0 2.125.875t.875 2.125q0 .575-.225 1.138t-.65.987l-8.5 8.5q-.425.425-.987.65t-1.138.225");
}
</style><path class="uucwhfbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eraser-size-2-rounded"} {...others} />);
}

export default Component;
