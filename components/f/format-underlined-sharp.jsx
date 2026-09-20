import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blg59tb1o {
  fill: currentColor;
  d: path("M5 21v-2h14v2zm3.075-5.575q-1.4-1.575-1.4-4.175V3H9.25v8.4q0 1.4.7 2.275t2.05.875t2.05-.875t.7-2.275V3h2.575v8.25q0 2.6-1.4 4.175T12 17t-3.925-1.575");
}
</style><path class="blg59tb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-underlined-sharp"} {...others} />);
}

export default Component;
