import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xd1cvpb2o {
  fill: currentColor;
  d: path("M16 10h-2v2h2zm0 4h-2v2h2zm-8-4H6v2h2zm4 0h-2v2h2zm10-6H2v16h20zm-2 14H4V6h16z");
}
</style><path class="xd1cvpb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-image-aspect-ratio"} {...others} />);
}

export default Component;
