import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tpfxwccto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 20H2M22 4H2M15 9H9C7.8895 9 7 9.903 7 11V12V13C7 14.112 7.8948 15 9 15H15C16.1039 15 17 14.105 17 13V12V11C17 9.895 16.0986 9 15 9Z");
}
</style><path class="tpfxwccto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-vertical-space-around"} {...others} />);
}

export default Component;
