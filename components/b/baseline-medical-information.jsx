import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mpgb1ltox {
  fill: currentColor;
  d: path("M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2zm2-1.5V13h6v1.5zm0 3V16h4v1.5z");
}
</style><path class="mpgb1ltox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-medical-information"} {...others} />);
}

export default Component;
