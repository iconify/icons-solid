import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bozixybsr {
  fill: currentColor;
  d: path("M12.293 4.293a5.243 5.243 0 0 1 7.414 7.414l-8 8a5.243 5.243 0 0 1-7.414-7.414ZM15 13.586l3.293-3.293a3.243 3.243 0 0 0-4.586-4.586L10.414 9Z");
}
</style><path class="bozixybsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pill-fill-sharp"} {...others} />);
}

export default Component;
