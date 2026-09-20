import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdpg9q0zc {
  fill: currentColor;
  d: path("M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h3v5q0 .425.288.713T8 12t.713-.288T9 11V6h2v5q0 .425.288.713T12 12t.713-.288T13 11V6h2v5q0 .425.288.713T16 12t.713-.288T17 11V6h3q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18z");
}
</style><path class="tdpg9q0zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:straighten-rounded"} {...others} />);
}

export default Component;
