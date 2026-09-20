import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.bra0ilwom {
  fill: currentColor;
  d: path("M6 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1zM5 1a.5.5 0 0 1 .5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2A1.5 1.5 0 0 1 13 3.5v6.586a1.5 1.5 0 0 1-.44 1.06l-3.414 3.415a1.5 1.5 0 0 1-1.06.439H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2v-.5A.5.5 0 0 1 5 1m6.5 2h-7a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H8v-2.5A1.5 1.5 0 0 1 9.5 10H12V3.5a.5.5 0 0 0-.5-.5M9 13.293L11.293 11H9.5a.5.5 0 0 0-.5.5z");
}
</style><path class="bra0ilwom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:notepad-16-regular"} {...others} />);
}

export default Component;
