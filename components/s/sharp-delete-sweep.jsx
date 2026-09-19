import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbg4ns3dh {
  fill: currentColor;
  d: path("M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 20h10V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z");
}
</style><path class="nbg4ns3dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-delete-sweep"} {...others} />);
}

export default Component;
