import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blmvltbck {
  fill: currentColor;
  d: path("M2 22L22 2v20zm11-2h7V6.85l-7 7z");
}
</style><path class="blmvltbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-2-bar-outline-sharp"} {...others} />);
}

export default Component;
