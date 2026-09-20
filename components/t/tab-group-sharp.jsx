import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcj7r0boy {
  fill: currentColor;
  d: path("M2 22V6h2v14h14v2zm4-4V2h16v16zm7-10h7V4h-7z");
}
</style><path class="fcj7r0boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-group-sharp"} {...others} />);
}

export default Component;
