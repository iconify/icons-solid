import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kldjgvbca {
  fill: currentColor;
  d: path("M3 19L13.289 5h7.73l-2.807 14zm11.289-5.616q.78 0 1.342-.544t.561-1.333q0-.807-.561-1.35t-1.342-.542q-.765 0-1.315.539q-.551.539-.551 1.352q0 .794.55 1.336q.551.542 1.316.542");
}
</style><path class="kldjgvbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:airlines-sharp"} {...others} />);
}

export default Component;
