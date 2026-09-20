import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_7jrcbzv {
  fill: currentColor;
  d: path("M17.125 14.125Q18 13.25 18 12t-.875-2.125T15 9t-2.125.875T12 12t.875 2.125T15 15t2.125-.875M15 17q-1.8 0-3.175-1.125T10.1 13H7q-.425 0-.712-.288T6 12t.288-.712T7 11h3.1q.125-.55.338-1.062T11 9H5q-.425 0-.712-.288T4 8t.288-.712T5 7h10q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17");
}
</style><path class="l_7jrcbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:blur-short-rounded"} {...others} />);
}

export default Component;
