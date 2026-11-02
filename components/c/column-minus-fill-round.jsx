import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ukcc3lbke {
  fill: currentColor;
  d: path("M3 7a4 4 0 0 1 8 0v10a4 4 0 0 1-8 0Zm17 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="ukcc3lbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:column-minus-fill-round"} {...others} />);
}

export default Component;
