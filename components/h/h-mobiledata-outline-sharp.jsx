import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ih3eoqb-u {
  fill: currentColor;
  d: path("M7.5 17V7h1v4.5h7V7h1v10h-1v-4.5h-7V17z");
}
</style><path class="ih3eoqb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:h-mobiledata-outline-sharp"} {...others} />);
}

export default Component;
