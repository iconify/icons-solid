import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tlcsegrxa {
  fill: currentColor;
  d: path("M2 24v-2h20v2zm2.442-6.173l2.535-2.535l-.73-.725v-1.136l4.45-4.45l4.015 4.021l-4.45 4.444H9.13l-.77-.769l-1.15 1.15zm6.962-9.56l5.694-5.688L21.114 6.6l-5.689 5.689z");
}
</style><path class="tlcsegrxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-ink-highlighter-sharp"} {...others} />);
}

export default Component;
