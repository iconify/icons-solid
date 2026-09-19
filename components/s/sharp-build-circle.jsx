import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j-0zlb5we {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.14 15.25l-3.76-3.76c-1.22.43-2.64.17-3.62-.81a3.47 3.47 0 0 1-.59-4.1l2.35 2.35l1.41-1.41l-2.35-2.35c1.32-.71 2.99-.52 4.1.59c.98.98 1.24 2.4.81 3.62l3.76 3.76z");
}
</style><path class="j-0zlb5we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-build-circle"} {...others} />);
}

export default Component;
