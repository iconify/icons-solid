import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgetemsit {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10zm-6 16v-5.5H9L13 7v5.5h2z");
}
</style><path class="pgetemsit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-charging-full"} {...others} />);
}

export default Component;
