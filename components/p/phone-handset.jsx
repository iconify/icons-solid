import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kor6d6b3r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 13.5q0-2.66 3.019-4.285Q7.989 7.75 12 7.75t6.731 1.465Q21.75 10.84 21.75 13.5V15q0 1.75-1.75 1.75h-3.5q-1.75 0-1.75-1.75v-.946q-2.75-.773-5.5 0V15q0 1.75-1.75 1.75H4q-1.75 0-1.75-1.75z");
}
</style><path class="kor6d6b3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:phone-handset"} {...others} />);
}

export default Component;
