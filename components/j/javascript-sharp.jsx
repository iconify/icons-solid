import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r5ivu1cqv {
  fill: currentColor;
  d: path("M6.23 14.692V12.5h.886v1.308h2.076v-4.5h.885v5.384zm6.078 0V13h.884v.808h2.616v-1.5h-3.5v-3h4.384V11h-.884v-.808h-2.616v1.5h3.5v3z");
}
</style><path class="r5ivu1cqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:javascript-sharp"} {...others} />);
}

export default Component;
