import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg0a43ifq {
  fill: currentColor;
  d: path("M5 2.764a3 3 0 0 1 4 0a3 3 0 0 1 3.225-.502A3 3 0 0 1 14 5v10a2 2 0 0 0 2 2h2.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L18.586 19H16a4 4 0 0 1-4-4V5a1 1 0 0 0-2 0v10a1 1 0 0 1-2 0V5a1 1 0 0 0-2 0v10a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1a1 1 0 0 1 0-2c.74 0 1.45.27 2 .764");
}
</style><path class="fg0a43ifq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-scorpio-fill-round"} {...others} />);
}

export default Component;
