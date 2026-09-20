import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.he-xofcpn {
  fill: currentColor;
  d: path("M234.43 202.08L138.35 34.14a12 12 0 0 0-20.92 0l-95.88 168A12 12 0 0 0 36 219.3l92-31.08l91.94 31.06a12 12 0 0 0 14.49-17.2m-7.43 8.48a3.94 3.94 0 0 1-4.47 1.16L132 181.13V120a4 4 0 0 0-8 0v61.13l-90.63 30.61a4 4 0 0 1-4.85-5.69l95.87-168a4 4 0 0 1 7 0L227.47 206a3.91 3.91 0 0 1-.47 4.56");
}
</style><path class="he-xofcpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paper-plane-thin"} {...others} />);
}

export default Component;
