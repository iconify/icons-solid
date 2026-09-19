import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ag2pjy3mn {
  fill: currentColor;
  d: path("m20.39 8.56l-1.24 1.86a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.86-1.24A10 10 0 0 0 4 20h16a10 10 0 0 0 .38-11.44z");
}

.xa7tlw86o {
  fill: currentColor;
  d: path("M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49l-8.49 5.66a2 2 0 0 0 0 2.83");
}
</style><path class="ag2pjy3mn"/><path class="xa7tlw86o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-speed"} {...others} />);
}

export default Component;
