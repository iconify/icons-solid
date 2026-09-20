import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4xp6vxxv {
  fill: currentColor;
  d: path("M3 21L21 3v10.73h-1V5.422L5.421 20h8.695v1zm13.5 0v-4.884h1V21zm3 0v-4.884h1V21zm-6.786-8.292");
}
</style><path class="w4xp6vxxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-pause-outline"} {...others} />);
}

export default Component;
