import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t2saqfb-z {
  fill: currentColor;
  d: path("M148 104V64a4 4 0 0 1 8 0v30.34l49.17-49.17a4 4 0 1 1 5.66 5.66L161.66 100H192a4 4 0 0 1 0 8h-40a4 4 0 0 1-4-4m-44 44H64a4 4 0 0 0 0 8h30.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L100 161.66V192a4 4 0 0 0 8 0v-40a4 4 0 0 0-4-4m57.66 8H192a4 4 0 0 0 0-8h-40a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0v-30.34l49.17 49.17a4 4 0 0 0 5.66-5.66ZM104 60a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L94.34 100H64a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4");
}
</style><path class="t2saqfb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-in-thin"} {...others} />);
}

export default Component;
