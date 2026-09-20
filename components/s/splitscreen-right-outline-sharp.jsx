import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fc-n39buv {
  fill: currentColor;
  d: path("M13.385 20V4h6v16zm-8.77 0V4h6v16zm1-15v14h4V5z");
}
</style><path class="fc-n39buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-right-outline-sharp"} {...others} />);
}

export default Component;
