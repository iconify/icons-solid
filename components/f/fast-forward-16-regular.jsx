import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.e9i4m9x4e {
  fill: currentColor;
  d: path("M2 4.465a1 1 0 0 1 1.576-.818L8 6.768V4.465a1 1 0 0 1 1.576-.818l5.012 3.536a1 1 0 0 1 0 1.634l-5.012 3.536A1 1 0 0 1 8 11.536V9.232l-4.424 3.12A1 1 0 0 1 2 11.537zm6 3.527L3 4.465v7.07l5-3.527zm1 3.544L14.012 8L9 4.465z");
}
</style><path class="e9i4m9x4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:fast-forward-16-regular"} {...others} />);
}

export default Component;
