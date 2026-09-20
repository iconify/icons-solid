import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z7ghj0bbw {
  fill: currentColor;
  d: path("M3.75 22L4 20h4.075l1-4h2l1.5-6H5.25l.5-4H9.5q.2-1.875 1.288-2.937T13.75 2q1.6 0 2.663 1.188T17.45 6h4.8l-2 16zM1 18l.5-2H7l-.5 2zm2-4l.5-2H10l-.5 2zm8.5-8h3.975q.025-.825-.562-1.412T13.5 4q-.875 0-1.388.538T11.5 6");
}
</style><path class="z7ghj0bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shopping-bag-speed-sharp"} {...others} />);
}

export default Component;
