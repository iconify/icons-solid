import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5k-vetvx {
  fill: currentColor;
  d: path("M6.104 8.79A3.01 3.01 0 0 0 9 11h4a1 1 0 0 1 0 2H9a5 5 0 0 1-3-.999v3.17a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2.104-.039m11.603.503L19 10.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L20.414 12l1.293 1.293a.999.999 0 1 1-1.414 1.414L19 13.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L17.586 12l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="q5k-vetvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-merge-conflict-fill-sharp"} {...others} />);
}

export default Component;
