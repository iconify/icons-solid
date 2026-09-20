import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5911o9vi {
  fill: currentColor;
  d: path("m7 14l5-5l5 5z");
}
</style><path class="d5911o9vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-drop-up-outline-sharp"} {...others} />);
}

export default Component;
