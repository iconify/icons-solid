import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rfmkfizvb {
  fill: currentColor;
  d: path("M12 3h3a1 1 0 0 1 0 2h-2v14h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2V5H9a1 1 0 0 1 0-2Z");
}
</style><path class="rfmkfizvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-i-fill"} {...others} />);
}

export default Component;
