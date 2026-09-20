import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nq5sske2x {
  fill: currentColor;
  d: path("M2 18v-3q0-1.65 1.175-2.825T6 11h9v-1q0-.425-.288-.712T14 9h-4q-.425 0-.712.288T9 10H7q0-1.25.875-2.125T10 7h4q1.25 0 2.125.875T17 10v4q.425 0 .713-.288T18 13V9q0-1.25.875-2.125T21 6h1v2h-1q-.425 0-.712.288T20 9v4q0 1.25-.875 2.125T17 16v2zm2-2h11v-3H6q-.825 0-1.412.588T4 15zm11 0v-3z");
}
</style><path class="nq5sske2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:iron-outline"} {...others} />);
}

export default Component;
