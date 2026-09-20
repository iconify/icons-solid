import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.byqeqhagc {
  fill: currentColor;
  d: path("M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-10.28 8L128 138.57L42.28 60ZM216 196H40a4 4 0 0 1-4-4V65.09L125.3 147a4 4 0 0 0 5.4 0L220 65.09V192a4 4 0 0 1-4 4");
}
</style><path class="byqeqhagc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:envelope-simple-thin"} {...others} />);
}

export default Component;
