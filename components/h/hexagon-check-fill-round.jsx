import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cul32lbjx {
  fill: currentColor;
  d: path("M21 9v6c0 1.693-1.069 3.152-2.553 3.894l-4 2a5.47 5.47 0 0 1-4.894 0l-4-2C4.069 18.152 3 16.693 3 15V9c0-1.693 1.069-3.152 2.553-3.894l4-2a5.47 5.47 0 0 1 4.894 0l4 2C19.931 5.848 21 7.307 21 9m-10 3.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="cul32lbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-check-fill-round"} {...others} />);
}

export default Component;
