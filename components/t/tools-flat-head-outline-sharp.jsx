import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcty2gb0e {
  fill: currentColor;
  d: path("M8 21v-2h8v2zm0-3l-1-7l2-8h6l2 8l-1 7zm1.725-2h4.55l.55-4H9.15zM9.3 10h5.4l-1.25-5h-2.9zm4.975 6h-4.55z");
}
</style><path class="fcty2gb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tools-flat-head-outline-sharp"} {...others} />);
}

export default Component;
