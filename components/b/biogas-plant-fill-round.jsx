import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lc93hlbrs {
  fill: currentColor;
  d: path("M14.798 9c.431.611.764 1.286.985 2H2.217a7.1 7.1 0 0 1 6.39-4.989a7.1 7.1 0 0 1 13.376 1.808l.001.001q.015.084.016.17V15a3 3 0 0 1-3 3h-3v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6h14v3h3a1 1 0 0 0 1-1V9Zm-2.163-2h7.014a5.101 5.101 0 0 0-8.863-.773c.649.169 1.272.43 1.849.773");
}
</style><path class="lc93hlbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:biogas-plant-fill-round"} {...others} />);
}

export default Component;
