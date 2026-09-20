import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wff0krbrj {
  fill: currentColor;
  d: path("M7 17V7h2v4h6V7h2v10h-2v-4H9v4z");
}
</style><path class="wff0krbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:h-mobiledata"} {...others} />);
}

export default Component;
