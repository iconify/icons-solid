import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.b--bnemmz {
  fill: currentColor;
  d: path("M5.754 24.996a3.75 3.75 0 0 1-3.75-3.75V9.48l2.65 5.533a5.25 5.25 0 0 0 4.735 2.982h13.612v.25a3.75 3.75 0 0 1-3.75 3.75h-5.587a.25.25 0 0 0-.177.073l-2.12 2.121a2.75 2.75 0 0 1-1.945.806zM2.116 6.232l-.008-.021A1.637 1.637 0 0 1 3.64 4h15.974a3.75 3.75 0 0 1 3.244 1.869l3.768 6.497c1.063 1.833-.26 4.13-2.379 4.13H9.39a3.75 3.75 0 0 1-3.382-2.13L2.165 6.344z");
}
</style><path class="b--bnemmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:folder-open-down-28-filled"} {...others} />);
}

export default Component;
