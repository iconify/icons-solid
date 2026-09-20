import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fwoxvrbrk {
  fill: currentColor;
  d: path("M140 16v32a12 12 0 0 1-24 0V16a12 12 0 0 1 24 0m36 36a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m-48 144a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m0-120a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12M80 52a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m96 72a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-56a12 12 0 0 0-12-12M32 100a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m48 48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m144-48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12");
}
</style><path class="fwoxvrbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:google-podcasts-logo-bold"} {...others} />);
}

export default Component;
