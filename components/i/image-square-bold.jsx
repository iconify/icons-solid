import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dmq_yhg7o {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v63.72l-17.86-17.86a20 20 0 0 0-28.28 0L52 203.72V52ZM85.66 204L172 117.66l32 32V204ZM76 96a20 20 0 1 1 20 20a20 20 0 0 1-20-20");
}
</style><path class="dmq_yhg7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:image-square-bold"} {...others} />);
}

export default Component;
