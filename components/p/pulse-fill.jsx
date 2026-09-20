import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aparrmwom {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-19.36L159 188a8 8 0 0 1-6.95 4h-.46a8 8 0 0 1-6.89-4.84L103 89.92L79 132a8 8 0 0 1-7 4H48a8 8 0 0 1 0-16h19.36l29.69-52a8 8 0 0 1 14.3.82L153 166.08l24-42.05a8 8 0 0 1 6.95-4h24a8 8 0 0 1 0 16Z");
}
</style><path class="aparrmwom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pulse-fill"} {...others} />);
}

export default Component;
