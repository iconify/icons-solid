import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnxy0pti {
  fill: currentColor;
  d: path("M2 20V4h20v16H2Zm11.65-3L19 11.65l-1.4-1.425l-3.95 3.95l-3.65-3.65l-5 5l1.4 1.425l3.6-3.6L13.65 17Zm.1-5.5l.7-1.55l1.55-.7l-1.55-.7l-.7-1.55l-.7 1.55l-1.55.7l1.55.7l.7 1.55Z");
}
</style><path class="abnxy0pti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:performance-max-sharp"} {...others} />);
}

export default Component;
