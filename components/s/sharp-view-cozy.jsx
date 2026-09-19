import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajvpkp0ft {
  fill: currentColor;
  d: path("M22 4H2v16h20zM11.25 16.75h-4v-4h4zm0-5.5h-4v-4h4zm5.5 5.5h-4v-4h4zm0-5.5h-4v-4h4z");
}
</style><path class="ajvpkp0ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-cozy"} {...others} />);
}

export default Component;
