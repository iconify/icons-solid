import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p4rimwigs {
  fill: currentColor;
  d: path("m10 20l-5-5l5.006-5.006l.707.714L6.922 14.5H17V5h1v10.5H6.921l3.793 3.787z");
}
</style><path class="p4rimwigs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:subdirectory-arrow-left-outline-sharp"} {...others} />);
}

export default Component;
