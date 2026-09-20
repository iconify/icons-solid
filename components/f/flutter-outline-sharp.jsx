import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ihp79i1yo {
  fill: currentColor;
  d: path("M5.9 15.375L2.5 12l11-11h6.775zM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23z");
}
</style><path class="ihp79i1yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flutter-outline-sharp"} {...others} />);
}

export default Component;
