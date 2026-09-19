import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r39pabchc {
  fill: currentColor;
  d: path("m14.5 12.59l.9 3.88l-3.4-2.05l-3.4 2.05l.9-3.87l-3-2.59l3.96-.34L12 6.02l1.54 3.64l3.96.34zM12 3.19l7 3.11V11c0 4.52-2.98 8.69-7 9.93c-4.02-1.24-7-5.41-7-9.93V6.3zM12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z");
}
</style><path class="r39pabchc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-local-police"} {...others} />);
}

export default Component;
