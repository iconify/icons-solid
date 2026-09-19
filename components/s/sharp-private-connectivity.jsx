import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7k-0efxu {
  fill: currentColor;
  d: path("M18.93 11c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2zM15 10.5v5H9v-5h1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75s.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1");
}
</style><path class="h7k-0efxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-private-connectivity"} {...others} />);
}

export default Component;
