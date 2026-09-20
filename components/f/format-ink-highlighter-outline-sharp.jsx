import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8xigdc_p {
  fill: currentColor;
  d: path("M2 24v-2h20v2zm12.004-11.711l-1.3-1.3l-1.3-1.3l-4.308 4.307l2.594 2.6zM12.117 8.98l1.3 1.294l1.295 1.3l4.98-4.975l-2.6-2.6zm-7.675 8.846l2.535-2.535l-.73-.725V13.43l4.809-4.81l4.015 4.015l-4.81 4.81h-1.13l-.77-.769l-1.15 1.15zm6.614-9.206l6.042-6.042L21.119 6.6l-6.048 6.037z");
}
</style><path class="p8xigdc_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-ink-highlighter-outline-sharp"} {...others} />);
}

export default Component;
