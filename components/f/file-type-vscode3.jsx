import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.xy6v266xn {
  fill: var(--svg-color--007acc, #007acc);
  d: path("M29.821 4.321L24.023 2l-12.53 12.212l-7.66-5.827l-1.654.837V22.8l1.644.827l7.65-5.827L24.023 30l5.8-2.321V4.321ZM4.65 19.192v-6.374l3.55 3.167zM16 15.985l7.082-5.3v10.639l-7.092-5.339z");
}
</style><path class="xy6v266xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-vscode3"} {...others} />);
}

export default Component;
