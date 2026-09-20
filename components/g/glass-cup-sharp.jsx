import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dye3ux85q {
  fill: currentColor;
  d: path("M6.027 21L4 3h16l-2.008 18zm.51-4.5h10.952L18.866 4H5.116z");
}
</style><path class="dye3ux85q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:glass-cup-sharp"} {...others} />);
}

export default Component;
