import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvxojhsim {
  fill: currentColor;
  d: path("M12 13V4h6v9zm6 5H8L5 8V4h2v4l2.5 8H18zM8 21v-2h10v2z");
}
</style><path class="lvxojhsim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flight-class-sharp"} {...others} />);
}

export default Component;
