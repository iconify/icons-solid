import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p38njhtgy {
  fill: currentColor;
  d: path("M3 4V3h18v1zm8 16V7h2v13z");
}
</style><path class="p38njhtgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-flex-start-outline-sharp"} {...others} />);
}

export default Component;
