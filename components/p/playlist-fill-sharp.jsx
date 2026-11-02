import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhdsrebzt {
  fill: currentColor;
  d: path("M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m11 5a1 1 0 0 1 1.555-.832l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 14 18ZM3 11h8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m13 5.131L19.197 14L16 11.869ZM3 17h8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="rhdsrebzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:playlist-fill-sharp"} {...others} />);
}

export default Component;
