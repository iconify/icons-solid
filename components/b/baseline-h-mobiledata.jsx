import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yxkfhs9ju {
  fill: currentColor;
  d: path("M15 11H9V7H7v10h2v-4h6v4h2V7h-2z");
}
</style><path class="yxkfhs9ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-h-mobiledata"} {...others} />);
}

export default Component;
