import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eydz5kqlc {
  fill: currentColor;
  d: path("M18 9.002a5 5 0 0 1 5-5a5.004 5.004 0 0 1 5.004 5v8.012l6.201.988c5.352.853 8.826 6.105 7.52 11.366l-2.375 9.555a5.25 5.25 0 0 1-4.292 3.922l-7.07 1.09c-2.74.424-5.06-1.376-6.1-3.598c-1.564-3.338-5.32-7.831-16.585-12.785c-1.198-.527-1.697-2.025-.952-3.165a9.39 9.39 0 0 1 11.698-3.441l1.951.876z");
}
</style><path class="eydz5kqlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hand-point-48-filled"} {...others} />);
}

export default Component;
