import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dggag-y5q {
  fill: currentColor;
  d: path("M17.5 22.5v-4h-12v-12h-4v-1h4v-4h1v16h16v1h-4v4zm0-6v-10h-10v-1h11v11z");
}
</style><path class="dggag-y5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-sharp"} {...others} />);
}

export default Component;
