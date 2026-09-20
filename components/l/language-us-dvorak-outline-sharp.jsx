import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enuxo7m3r {
  fill: currentColor;
  d: path("M6 15h3.25V9H6zm-2 2V7h6.25l1 1v8l-1 1zm11.625 0L12.25 7h2l2.375 6.95L19 7h2l-3.375 10z");
}
</style><path class="enuxo7m3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-us-dvorak-outline-sharp"} {...others} />);
}

export default Component;
