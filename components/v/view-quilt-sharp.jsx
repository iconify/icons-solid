import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ryr3ux5mi {
  fill: currentColor;
  d: path("M9.325 11.5V5H21v6.5zm6.35 7.5v-6.5H21V19zm-6.35 0v-6.5h5.35V19zM3 19V5h5.325v14z");
}
</style><path class="ryr3ux5mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-quilt-sharp"} {...others} />);
}

export default Component;
