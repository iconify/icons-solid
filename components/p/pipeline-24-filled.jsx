import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vgsocwb5g {
  fill: currentColor;
  d: path("M2 6a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm-1.5 0h-9v11h9z");
}
</style><path class="vgsocwb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pipeline-24-filled"} {...others} />);
}

export default Component;
