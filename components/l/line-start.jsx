import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg2oa7b0y {
  fill: currentColor;
  d: path("M4.5 14q-.838 0-1.42-.58T2.5 12t.58-1.42T4.5 10q.698 0 1.237.425t.698 1.075H21.5v1H6.435q-.16.65-.698 1.075T4.5 14");
}
</style><path class="fg2oa7b0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start"} {...others} />);
}

export default Component;
