import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhd8q83uz {
  fill: currentColor;
  d: path("M3 21L21 3v10.73h-6.884V21zm16.5 0v-4.884h1V21zm-3 0v-4.884h1V21z");
}
</style><path class="bhd8q83uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-pause"} {...others} />);
}

export default Component;
