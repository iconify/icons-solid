import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xl49gkbrq {
  fill: currentColor;
  d: path("m96 73l-61.94 55L96 183a12 12 0 1 1-16 18L8 137a12 12 0 0 1 0-18l72-64a12 12 0 0 1 16 18m152 46l-72-64a12 12 0 1 0-16 18l61.91 55L160 183a12 12 0 1 0 16 18l72-64a12 12 0 0 0 0-18");
}
</style><path class="xl49gkbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:code-simple-bold"} {...others} />);
}

export default Component;
