import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-gatdxir {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h9q.825 0 1.413.588T17 4v2h-3v8.275l-1.25-.65q-.95-.475-2-.325t-1.8.9L7.3 15.875L12.4 22zm9.95 0q-.45 0-.862-.187t-.688-.538L10 16l.375-.375q.275-.275.688-.337t.787.137L16 17.5V8h1q1.25 0 2.125.875T20 11v8q0 1.25-.875 2.125T17 22zM11.213 6.713Q11.5 6.425 11.5 6t-.288-.712T10.5 5t-.712.288T9.5 6t.288.713T10.5 7t.713-.288");
}
</style><path class="d-gatdxir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-hand"} {...others} />);
}

export default Component;
