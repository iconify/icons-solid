import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.h14hzeb3q {
  fill: currentColor;
  d: path("M17.348 3.84c-.549-1.12-2.144-1.12-2.693 0l-3.2 6.52l-7.17 1.05c-1.228.179-1.72 1.686-.834 2.555l5.196 5.096l-1.225 7.183c-.209 1.227 1.08 2.16 2.18 1.578l6.4-3.385l6.398 3.385c1.1.582 2.39-.351 2.18-1.578l-1.224-7.183l5.195-5.096c.886-.87.394-2.376-.833-2.556l-7.171-1.048zM2.293 5.162a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m23 3a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414zm-23 16.414a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0m23-4.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414");
}
</style><path class="h14hzeb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:star-emphasis-32-filled"} {...others} />);
}

export default Component;
