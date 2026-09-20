import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clrpgxbxa {
  fill: currentColor;
  d: path("M5.692 19v-1h1.466l2.226-7.5h5.232l2.226 7.5h1.466v1zM11.5 7.885v-4h1v4zm5.45 2.263l-.713-.713l2.838-2.814l.689.689zm1.55 4.737v-1h4v1zM7.05 10.147L4.237 7.31l.688-.689l2.839 2.814zM1.5 14.885v-1h4v1z");
}
</style><path class="clrpgxbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:e911-emergency-sharp"} {...others} />);
}

export default Component;
