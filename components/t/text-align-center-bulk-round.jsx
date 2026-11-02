import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z6y-vswyx {
  fill: currentColor;
  d: path("M20 5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-3 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm3 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-3 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><path class="z6y-vswyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-align-center-bulk-round"} {...others} />);
}

export default Component;
