import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-43ddoew {
  fill: currentColor;
  d: path("M3 21L21 3v18zm2.421-1H20V5.427z");
}
</style><path class="w-43ddoew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-null-outline"} {...others} />);
}

export default Component;
