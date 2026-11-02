import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x1b9j_3vc {
  fill: currentColor;
  d: path("M18 5a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8.414L6.707 18.707a.999.999 0 1 1-1.414-1.414L15.586 7H10a1 1 0 0 1 0-2Z");
}
</style><path class="x1b9j_3vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-right-large-fill-round"} {...others} />);
}

export default Component;
