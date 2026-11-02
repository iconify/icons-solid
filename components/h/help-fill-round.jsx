import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wv751gbui {
  fill: currentColor;
  d: path("M7.393 8.053A5.001 5.001 0 1 1 12 15a1.002 1.002 0 0 1-.866-1.5c.179-.309.509-.5.866-.5a3 3 0 1 0-3-3a1 1 0 0 1-2 0a5 5 0 0 1 .393-1.947M12.01 17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><path class="wv751gbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:help-fill-round"} {...others} />);
}

export default Component;
