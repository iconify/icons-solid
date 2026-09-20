import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o1w9h39ut {
  fill: currentColor;
  d: path("m51.51 104.49l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L45 64l23.49 23.51a12 12 0 0 1-17 17Zm48 0a12 12 0 0 0 17 0l32-32a12 12 0 0 0 0-17l-32-32a12 12 0 1 0-17 17L123 64L99.51 87.51a12 12 0 0 0 0 16.98M200 36h-20a12 12 0 0 0 0 24h16v136H60v-56a12 12 0 0 0-24 0v60a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20");
}
</style><path class="o1w9h39ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:code-block-bold"} {...others} />);
}

export default Component;
