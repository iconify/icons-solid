import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ivpp-d16v {
  fill: currentColor;
  d: path("m7.775 19l5-7l-5-7h2.45l5 7l-5 7z");
}
</style><path class="ivpp-d16v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:single-arrow-outline-sharp"} {...others} />);
}

export default Component;
