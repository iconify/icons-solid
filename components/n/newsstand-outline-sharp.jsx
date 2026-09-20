import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d93vzwbyu {
  fill: currentColor;
  d: path("M2 20v-2h20v2zm2-4V8h2v8zm4 0V4h2v12zm4 0V4h2v12zm7 0l-4-7l1.75-1l4 7z");
}
</style><path class="d93vzwbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:newsstand-outline-sharp"} {...others} />);
}

export default Component;
