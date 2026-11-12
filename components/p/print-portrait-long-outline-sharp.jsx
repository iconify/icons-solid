import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ch4fomb5q {
  fill: currentColor;
  d: path("M12.866 19v-1H17V5.02H7.196L6.773 4H18v15zM5 9.77V7.845h.923V4.681L6.773 4l6.593 2.217v14.26l-.812.546l-6.631-2.294V16.23H5v-1.923h.923V9.769zm1.923-4.772v13.004l5.443 1.877V6.9zM17 18V4.833zm-10.077.002V4.998z");
}
</style><path class="ch4fomb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:print-portrait-long-outline-sharp"} {...others} />);
}

export default Component;
