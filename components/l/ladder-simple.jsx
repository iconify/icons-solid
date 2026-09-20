import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.em_r4ib6l {
  fill: currentColor;
  d: path("M192 24a8 8 0 0 0-8 8v32H72V32a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-8 56v40H72V80ZM72 176v-40h112v40Z");
}
</style><path class="em_r4ib6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ladder-simple"} {...others} />);
}

export default Component;
