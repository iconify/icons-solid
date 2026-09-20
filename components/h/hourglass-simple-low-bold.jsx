import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.chm2gvbnv {
  fill: currentColor;
  d: path("M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM148.25 164h-40.5L128 144.61ZM190 52l-62 59.39L66 52ZM66 204l16.71-16h90.62L190 204Z");
}
</style><path class="chm2gvbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hourglass-simple-low-bold"} {...others} />);
}

export default Component;
