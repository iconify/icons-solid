import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hecmx9b1v {
  fill: currentColor;
  d: path("M152.49 119.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17-17L127 128L55.51 56.49a12 12 0 0 1 17-17ZM184 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12");
}
</style><path class="hecmx9b1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-right-bold"} {...others} />);
}

export default Component;
