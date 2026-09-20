import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f24-01b9t {
  fill: currentColor;
  d: path("M3 21V3h18v18zm9-2h7V5h-7z");
}
</style><path class="f24-01b9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:side-navigation-sharp"} {...others} />);
}

export default Component;
