import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.espmrobbe {
  fill: currentColor;
  d: path("M4.05 21H3v-5.875L8 14.1l2.9 2.9q1-.575 1.863-1.237t1.587-1.388q.775-.75 1.45-1.625t1.225-1.85l-2.85-2.875L15.1 3H21v1.05q0 3.15-1.35 6.2T15.8 15.8t-5.562 3.85T4.05 21");
}
</style><path class="espmrobbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:phone-enabled-sharp"} {...others} />);
}

export default Component;
