import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3mjccbqa {
  fill: currentColor;
  d: path("M12 14.702L6.692 9.394l.708-.707l4.6 4.6l4.6-4.6l.708.707z");
}
</style><path class="c3mjccbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:expand-more"} {...others} />);
}

export default Component;
