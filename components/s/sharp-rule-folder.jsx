import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iykvtjb4o {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zM7.83 16L5 13.17l1.41-1.41l1.41 1.41l3.54-3.54l1.41 1.41zm9.58-3L19 14.59L17.59 16L16 14.41L14.41 16L13 14.59L14.59 13L13 11.41L14.41 10L16 11.59L17.59 10L19 11.41z");
}
</style><path class="iykvtjb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-rule-folder"} {...others} />);
}

export default Component;
