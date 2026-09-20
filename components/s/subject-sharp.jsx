import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.num-5bb5o {
  fill: currentColor;
  d: path("M5 18.23V17h8v1zm0-3.788v-1h14v1zm0-3.884v-1h14v1zM5 7V5.77h14V7z");
}
</style><path class="num-5bb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:subject-sharp"} {...others} />);
}

export default Component;
