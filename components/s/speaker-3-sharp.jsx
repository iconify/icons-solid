import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3c8e8bau {
  fill: currentColor;
  d: path("M8 22v-1H4V2h16v19h-4v1z");
}
</style><path class="e3c8e8bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speaker-3-sharp"} {...others} />);
}

export default Component;
