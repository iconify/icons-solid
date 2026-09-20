import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-0argbth {
  fill: currentColor;
  d: path("M2.616 20.5v-17h18.769v17zm1-1h3v-3h-3zm13.769 0h3v-3h-3zM11.5 15.923h1v-5.115h-1zM3.616 15.5h3v-3h-3zm13.769 0h3v-3h-3zm-13.77-4h3v-3h-3zm13.77 0h3v-3h-3zM12 9q.262 0 .439-.177q.176-.177.176-.438q0-.262-.177-.439T12 7.77t-.438.177t-.177.439t.177.438T12 9M3.615 7.5h3v-3h-3zm13.77 0h3v-3h-3z");
}
</style><path class="w-0argbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:movie-info-sharp"} {...others} />);
}

export default Component;
