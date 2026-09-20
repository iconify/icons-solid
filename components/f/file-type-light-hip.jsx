import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.r1n0eibdj {
  d: path("M22.37 22.14V9.63H9.86L2.24 2h27.75v27.76zm-1.53.01H9.85v-11L2 19v11h11z");
}
</style><path class="r1n0eibdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-light-hip"} {...others} />);
}

export default Component;
