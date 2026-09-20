import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azwm8ybep {
  fill: currentColor;
  d: path("M2 24v-4h20v4zm1.5-6l3.15-3.15l-.75-.725V12.7L10.6 8l5.4 5.425l-4.7 4.675H9.9l-.75-.75l-.65.65zM12 6.575l5.425-5.4l5.4 5.425l-5.4 5.4z");
}
</style><path class="azwm8ybep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-ink-highlighter-sharp"} {...others} />);
}

export default Component;
