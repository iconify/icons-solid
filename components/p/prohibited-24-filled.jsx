import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zexo25bub {
  fill: currentColor;
  d: path("M16.906 5.68A8.001 8.001 0 0 0 5.68 16.906zm1.414 1.414L7.094 18.32A8.002 8.002 0 0 0 18.32 7.094M4.93 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142");
}
</style><path class="zexo25bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:prohibited-24-filled"} {...others} />);
}

export default Component;
