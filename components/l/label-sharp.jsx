import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rr5bbb6od {
  fill: currentColor;
  d: path("M2 20V4h14l6 8l-6 8z");
}
</style><path class="rr5bbb6od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-sharp"} {...others} />);
}

export default Component;
