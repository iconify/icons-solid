import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xslu2qb0f {
  fill: currentColor;
  d: path("M21 7h-6V5h6zm-9 11l-7 3V3h8v2H7v12.95l5-2.15l5 2.15V11h2v10zM7 5h6z");
}
</style><path class="xslu2qb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmark-remove-outline-sharp"} {...others} />);
}

export default Component;
