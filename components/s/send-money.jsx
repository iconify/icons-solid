import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldf02nb1p {
  fill: currentColor;
  d: path("M6 19.75q-2.6-.675-4.3-2.8T0 12t1.7-4.95T6 4.25v2.1q-1.775.6-2.887 2.15T2 12t1.113 3.5T6 17.65zm8 .25q-3.325 0-5.663-2.337T6 12t2.338-5.663T14 4q1.65 0 3.1.625t2.55 1.725l-1.4 1.4q-.825-.825-1.912-1.287T14 6q-2.5 0-4.25 1.75T8 12t1.75 4.25T14 18q1.25 0 2.338-.462t1.912-1.288l1.4 1.4q-1.1 1.1-2.55 1.725T14 20m6-4l-1.4-1.4l1.6-1.6H13v-2h7.2l-1.6-1.6L20 8l4 4z");
}
</style><path class="ldf02nb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:send-money"} {...others} />);
}

export default Component;
