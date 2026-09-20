import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvrqiccot {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm6.539-4.288h.884V9.327h-.884zm-5.154 0h3.769v-2.539h-.885v1.654h-2v-3.615h2.885v-.885h-3.77zm7.538 0h.885v-2.154h1.923v-.885h-1.923v-1.461h2.923v-.885h-3.808zM5 19V5z");
}
</style><path class="dvrqiccot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:gif-box-outline-sharp"} {...others} />);
}

export default Component;
