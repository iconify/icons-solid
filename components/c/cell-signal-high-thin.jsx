import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cz6f93kru {
  fill: currentColor;
  d: path("M164 72v128a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4");
}
</style><path class="cz6f93kru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-high-thin"} {...others} />);
}

export default Component;
