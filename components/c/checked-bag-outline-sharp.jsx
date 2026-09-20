import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mx4wjb_lf {
  fill: currentColor;
  d: path("M2 21v-2h20v2zm2-4V6h5q0-1.25.875-2.125T12 3t2.125.875T15 6h5v11zm13-2h1V8h-1zm-6.5-9h3q0-.65-.425-1.075T12 4.5t-1.075.425T10.5 6M7 15V8H6v7zm1.5-7v7h7V8zM7 15h1.5zm10 0h-1.5zM7 15H6zm1.5 0h7zm8.5 0h1z");
}
</style><path class="mx4wjb_lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:checked-bag-outline-sharp"} {...others} />);
}

export default Component;
