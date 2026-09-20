import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cv-immv1j {
  fill: currentColor;
  d: path("M28 104a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m196-4h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8M72 140H32a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m152 0h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m-124 4a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4m-44 36H32a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0H88a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M32 68h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8");
}
</style><path class="cv-immv1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:gradient-thin"} {...others} />);
}

export default Component;
