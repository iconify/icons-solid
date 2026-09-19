import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ayxuultft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.587 5.5v22.069c0 8.246-6.685 14.931-14.932 14.931h-4.2");
}

.c1ms93b4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.629 15.458L28.587 5.5l9.958 9.958");
}
</style><path class="c1ms93b4r"/><path class="ayxuultft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-arrow-pointing-rightwards-then-curving-upwards"} {...others} />);
}

export default Component;
