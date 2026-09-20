import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.nnmpa2y7g {
  fill: currentColor;
  d: path("M2 7.75A.75.75 0 0 1 2.75 7h8.5a.75.75 0 0 1 0 1.5H4.615l10.387 9.963l9.731-9.256a.75.75 0 1 1 1.034 1.086l-10.25 9.75a.75.75 0 0 1-1.036-.002L3.5 9.51v6.741a.75.75 0 0 1-1.5 0z");
}
</style><path class="nnmpa2y7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bounce-28-regular"} {...others} />);
}

export default Component;
