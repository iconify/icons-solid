import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.slclfpbyv {
  fill: currentColor;
  d: path("M16 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3m-2 0a.997.997 0 0 0-1-1h-2a.997.997 0 0 0-1 1Zm-3 15h2a1 1 0 0 0 1-1h-4a1 1 0 0 0 1 1");
}
</style><path class="slclfpbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smartwatch-fill"} {...others} />);
}

export default Component;
