import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzj356b9q {
  fill: currentColor;
  d: path("m2.2 16.4l4-5.325q.15-.2.363-.3t.437-.1t.438.1t.362.3l3.4 4.525q.15.2.35.3t.45.1q.625 0 .9-.562t-.1-1.063L10.7 11.6q-.2-.275-.2-.6t.2-.6l2.5-3.325q.15-.2.363-.3t.437-.1t.438.1t.362.3l7 9.325q.375.5.1 1.05T21 18H3q-.625 0-.9-.55t.1-1.05");
}
</style><path class="fzj356b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:landscape-rounded"} {...others} />);
}

export default Component;
