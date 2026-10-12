import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ob_9lpblp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 9h12.5l-.9 1.2l-2.7 3.6l-.9 1.2h-14l.9-1.2l2.7-3.6l.9-1.2zM8.5 4.5h9M16 3l1.5 1.5L16 6m-.5 13.5h-9M8 18l-1.5 1.5L8 21");
}
</style><path class="ob_9lpblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:skew-sharp"} {...others} />);
}

export default Component;
