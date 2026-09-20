import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.lhowc-axs {
  fill: currentColor;
  d: path("M10.44 2.037a.5.5 0 0 1 .273.652l-4.5 11a.5.5 0 0 1-.926-.378l4.5-11a.5.5 0 0 1 .652-.274");
}
</style><path class="lhowc-axs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:slash-forward-16-regular"} {...others} />);
}

export default Component;
