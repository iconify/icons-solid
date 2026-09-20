import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.lbuacbcpx {
  fill: currentColor;
  d: path("M13 4.5C13 6.433 10.761 8 8 8S3 6.433 3 4.5S5.239 1 8 1s5 1.567 5 3.5m-.149 2.649C11.76 8.27 9.994 9 8 9s-3.76-.73-4.851-1.851A2.5 2.5 0 0 0 3 8c0 1.933 2.239 3.5 5 3.5s5-1.567 5-3.5q-.002-.442-.149-.851m0 3.5C11.76 11.77 9.994 12.5 8 12.5s-3.76-.73-4.851-1.851A2.5 2.5 0 0 0 3 11.5C3 13.433 5.239 15 8 15s5-1.567 5-3.5q-.002-.442-.149-.851");
}
</style><path class="lbuacbcpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:coin-multiple-16-filled"} {...others} />);
}

export default Component;
