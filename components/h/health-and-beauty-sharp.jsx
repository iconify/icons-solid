import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cv0jw0ref {
  fill: currentColor;
  d: path("M16 22v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4V8h4V6h-4V4h7v18zM5 22L1 11l5-3V2h4v6l5 3l-4 11z");
}
</style><path class="cv0jw0ref"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:health-and-beauty-sharp"} {...others} />);
}

export default Component;
