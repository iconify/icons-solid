import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.re-qlj18o {
  fill: currentColor;
  d: path("M16 4h1a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H7a.997.997 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m5 11a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="re-qlj18o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-minus-corner-fill"} {...others} />);
}

export default Component;
