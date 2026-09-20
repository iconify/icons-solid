import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmksqvbdt {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V8q0-.825.588-1.412T4 6h6l2-2h8q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.825-7H11V7.825zM4 12l4-4H4zm0 3v3h16V6h-7v7q0 .825-.587 1.413T11 15zm7-4");
}
</style><path class="wmksqvbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:files-outline"} {...others} />);
}

export default Component;
