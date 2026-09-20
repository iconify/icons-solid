import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n6pw69bew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.68 42.89L5.5 31.7l9.7-4.52a10.15 10.15 0 0 0 6.14 5.39Zm6.16-14.67a3.4 3.4 0 1 1 3.39-3.41a3.4 3.4 0 0 1-3.39 3.41m-1.49-15a13 13 0 0 1 13.06 13v.1M21.35 5.11A21.15 21.15 0 0 1 42.5 26.25v.06");
}
</style><path class="n6pw69bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:escapepod"} {...others} />);
}

export default Component;
