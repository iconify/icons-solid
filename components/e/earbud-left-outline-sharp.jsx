import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3w75dbhc {
  fill: currentColor;
  d: path("M6 22V12H3V4h11v2H5v4h3v10h2V10h4v2h-2v10zm8-8V2h1q2.5 0 4.25 1.75T21 8t-1.75 4.25T15 14zm2-2.125q1.35-.35 2.175-1.425T19 8t-.825-2.45T16 4.125zM16 8");
}
</style><path class="z3w75dbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:earbud-left-outline-sharp"} {...others} />);
}

export default Component;
