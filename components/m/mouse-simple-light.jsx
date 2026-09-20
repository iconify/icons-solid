import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.klq9tbc0l {
  fill: currentColor;
  d: path("M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 158a50.06 50.06 0 0 1-50 50h-32a50.06 50.06 0 0 1-50-50V80a50.06 50.06 0 0 1 50-50h32a50.06 50.06 0 0 1 50 50ZM134 64v48a6 6 0 0 1-12 0V64a6 6 0 0 1 12 0");
}
</style><path class="klq9tbc0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:mouse-simple-light"} {...others} />);
}

export default Component;
