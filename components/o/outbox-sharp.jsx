import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onpc6n-au {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.75h4.4l1.1 2.2l.4.8h6.7l.4-.8l1.1-2.2h4.4v5.5H2.75v-2.5Zm0 0l1.6-4.5l.518-1.282L6.25 9h1m14 5.75l-1.6-4.5l-.518-1.282L17.75 9h-1M12 12.25v-9M8.75 6.5L12 3.25l3.25 3.25");
}
</style><path class="onpc6n-au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:outbox-sharp"} {...others} />);
}

export default Component;
