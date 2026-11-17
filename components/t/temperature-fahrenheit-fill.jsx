import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ri6nydjao {
  fill: currentColor;
  d: path("M2 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m19-1h-5a2 2 0 0 0-2 2v3h5a1 1 0 0 1 0 2h-5v6a1 1 0 0 1-2 0V8a4 4 0 0 1 4-4h5a1 1 0 0 1 0 2M4 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="ri6nydjao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:temperature-fahrenheit-fill"} {...others} />);
}

export default Component;
