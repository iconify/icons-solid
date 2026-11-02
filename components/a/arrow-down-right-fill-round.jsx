import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9afo1r9g {
  fill: currentColor;
  d: path("M16.999 18H10a1 1 0 0 1 0-2h4.586L6.293 7.707a.999.999 0 1 1 1.414-1.414L16 14.586V10a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Z");
}
</style><path class="m9afo1r9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-right-fill-round"} {...others} />);
}

export default Component;
