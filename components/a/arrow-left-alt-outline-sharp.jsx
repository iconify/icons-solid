import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lppkb600w {
  fill: currentColor;
  d: path("m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z");
}
</style><path class="lppkb600w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-left-alt-outline-sharp"} {...others} />);
}

export default Component;
