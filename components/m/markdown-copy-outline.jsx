import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zncnabfco {
  fill: currentColor;
  d: path("M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm5.25-9h1.5V8.5h1v3h1.5v-3h1V13h1.5V8q0-.425-.288-.712T15.75 7h-4.5q-.425 0-.712.288T10.25 8zM9 16V4z");
}
</style><path class="zncnabfco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markdown-copy-outline"} {...others} />);
}

export default Component;
