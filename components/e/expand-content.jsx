import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p85svyawr {
  fill: currentColor;
  d: path("M5 19v-6h2v4h4v2zm12-8V7h-4V5h6v6z");
}
</style><path class="p85svyawr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:expand-content"} {...others} />);
}

export default Component;
