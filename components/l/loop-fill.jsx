import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lv0pot3eq {
  fill: currentColor;
  d: path("M15 17h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a.997.997 0 0 0-1 1v8a1 1 0 0 0 1 1h3.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L8.586 19H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4a1 1 0 0 1 0-2");
}
</style><path class="lv0pot3eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:loop-fill"} {...others} />);
}

export default Component;
