import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uowkq3c5v {
  fill: currentColor;
  d: path("m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="uowkq3c5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:code-blocks-outline-sharp"} {...others} />);
}

export default Component;
