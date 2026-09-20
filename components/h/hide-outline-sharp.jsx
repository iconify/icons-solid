import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t4-ikwbkj {
  fill: currentColor;
  d: path("M4.714 19.98L4 19.268l5.1-5.094H6.058v-1h4.75v4.75h-1v-3.042zm8.478-9.191v-4.75h1V9.08l5.095-5.1l.713.713l-5.1 5.095h3.042v1z");
}
</style><path class="t4-ikwbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hide-outline-sharp"} {...others} />);
}

export default Component;
