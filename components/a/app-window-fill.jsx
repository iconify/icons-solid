import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nd7ejmbfp {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M68 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="nd7ejmbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:app-window-fill"} {...others} />);
}

export default Component;
