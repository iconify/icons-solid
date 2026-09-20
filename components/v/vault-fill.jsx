import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zhcdc6xuk {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-28.91a36 36 0 1 1 0-16H208a8 8 0 0 1 0 16m-44-8a20 20 0 1 1-20-20a20 20 0 0 1 20 20");
}
</style><path class="zhcdc6xuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vault-fill"} {...others} />);
}

export default Component;
