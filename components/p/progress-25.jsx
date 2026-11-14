import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z5v2iccdy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 8.25H3.5q-1.75 0-1.75 1.75v4q0 1.75 1.75 1.75h16.25q1.036 0 1.768-.732t.732-1.768v-2.5q0-1.036-.732-1.768T19.75 8.25");
}
</style><path class="z5v2iccdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:progress-25"} {...others} />);
}

export default Component;
