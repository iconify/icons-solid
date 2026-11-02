import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.on04bi53g {
  fill: currentColor;
  d: path("M18.586 10H5a.997.997 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h13.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="on04bi53g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:forward-bulk"} {...others} />);
}

export default Component;
