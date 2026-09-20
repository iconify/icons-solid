import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aa2fqxiti {
  fill: currentColor;
  d: path("M223.39 99.06A8 8 0 0 1 216 104h-40v88a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h136v-80h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72");
}
</style><path class="aa2fqxiti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-up-fill"} {...others} />);
}

export default Component;
