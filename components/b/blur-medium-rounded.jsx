import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx6wnab2n {
  fill: currentColor;
  d: path("M8 17q-.425 0-.712-.288T7 16t.288-.712T8 15h3q-.35-.425-.562-.937T10.1 13H5.5q-.425 0-.712-.288T4.5 12t.288-.712T5.5 11h4.6q.125-.55.338-1.062T11 9H5q-.425 0-.712-.288T4 8t.288-.712T5 7h10q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17zm9.125-2.875Q18 13.25 18 12t-.875-2.125T15 9t-2.125.875T12 12t.875 2.125T15 15t2.125-.875M5 17q-.425 0-.712-.288T4 16t.288-.712T5 15t.713.288T6 16t-.288.713T5 17");
}
</style><path class="dx6wnab2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:blur-medium-rounded"} {...others} />);
}

export default Component;
