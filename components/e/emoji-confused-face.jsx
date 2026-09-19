import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i7sa_w7ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.998 29.638c-5.09-1.397-9.178-.729-13.996 1.53m2.172-11.922a2.414 2.414 0 0 1-4.826 0a2.414 2.414 0 0 1 4.826 0m14.478 0a2.414 2.414 0 0 1-4.826 0c0-1.332 1.082-2.413 2.413-2.413s2.413 1.081 2.413 2.413");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="i7sa_w7ql"/><circle class="l6cd208_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-confused-face"} {...others} />);
}

export default Component;
