import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cb1ec2b8k {
  fill: currentColor;
  d: path("M3 3.707V16.5A1.5 1.5 0 0 0 4.5 18h2A1.5 1.5 0 0 0 8 16.5V8.707l4 4V16.5a1.5 1.5 0 0 0 1.5 1.5h2c.489 0 .923-.234 1.197-.596l.45.45a.5.5 0 0 0 .707-.708l-15-15a.5.5 0 1 0-.708.708zm9 6.172l5 5V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5zm-7.84-7.84L8 5.879V3.5A1.5 1.5 0 0 0 6.5 2h-2q-.175 0-.34.039");
}
</style><path class="cb1ec2b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pause-off-20-filled"} {...others} />);
}

export default Component;
