import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ishem2xdo {
  fill: currentColor;
  d: path("m12 19.579l2.067-2.048l.694.707L12 21l-2.761-2.762l.713-.707zM4.421 12l2.048 2.048l-.708.714L3 12l2.762-2.761l.707.694zm15.177 0L17.55 9.933l.689-.694L21 12l-2.762 2.762l-.688-.714zM12 4.402L9.952 6.45l-.713-.688L12 3l2.762 2.762l-.695.688z");
}
</style><path class="ishem2xdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:open-run-outline"} {...others} />);
}

export default Component;
