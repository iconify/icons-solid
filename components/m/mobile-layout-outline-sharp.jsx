import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ujnf8nxsp {
  fill: currentColor;
  d: path("M1 21v-6h10v6zm12 0V3h10v18zM3 19h6v-2H3zm12 0h6V5h-6zm3-1q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18M1 13V3h10v10zm6-5q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m-4 2.675L5 8l2.25 3H9V5H3zM6 8");
}
</style><path class="ujnf8nxsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-layout-outline-sharp"} {...others} />);
}

export default Component;
