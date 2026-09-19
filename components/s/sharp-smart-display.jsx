import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkerpptjt {
  fill: currentColor;
  d: path("M22 4H2v16h20zM9.5 16.5v-9l7 4.5z");
}
</style><path class="wkerpptjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-smart-display"} {...others} />);
}

export default Component;
