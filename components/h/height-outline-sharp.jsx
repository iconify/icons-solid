import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l-8o9rvqz {
  fill: currentColor;
  d: path("m11.98 20l-3.288-3.288l.689-.689l2.1 2.056V5.902L9.4 7.977l-.688-.688L12 4l3.289 3.289l-.708.713l-2.1-2.08v12.157l2.1-2.056l.688.689z");
}
</style><path class="l-8o9rvqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:height-outline-sharp"} {...others} />);
}

export default Component;
