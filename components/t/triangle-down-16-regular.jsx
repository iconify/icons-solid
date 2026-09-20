import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ojn6mvbvi {
  fill: currentColor;
  d: path("M9.312 14.223a1.5 1.5 0 0 1-2.629 0l-5.5-10a1.5 1.5 0 0 1 1.315-2.222h10.999a1.5 1.5 0 0 1 1.314 2.223zm-1.753-.482a.5.5 0 0 0 .877 0l5.499-10a.5.5 0 0 0-.438-.74H2.498a.5.5 0 0 0-.438.74z");
}
</style><path class="ojn6mvbvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:triangle-down-16-regular"} {...others} />);
}

export default Component;
