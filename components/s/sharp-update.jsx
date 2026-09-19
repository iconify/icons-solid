import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9wn0v34n {
  fill: currentColor;
  d: path("M11 8v5l4.25 2.52l.77-1.28l-3.52-2.09V8zm10 2V3l-2.64 2.64A8.94 8.94 0 0 0 12 3a9 9 0 1 0 9 9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10z");
}
</style><path class="u9wn0v34n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-update"} {...others} />);
}

export default Component;
