import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbcn9dbsl {
  fill: currentColor;
  d: path("M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z");
}
</style><path class="jbcn9dbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-expand-more"} {...others} />);
}

export default Component;
