import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tsi107bqg {
  fill: currentColor;
  d: path("M13 15h4q.225-.175.475-.312t.525-.263V13h-1.5v.5h-2v-3h2v.5H18V9h-5zm-7 0h5v-2H9.5v.5h-2v-3h2v.5H11V9H6zm-1 5q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h14q.825 0 1.413.588T21 6v8.1q-1.225-.275-2.437.113t-2.088 1.262q-.9.9-1.263 2.088T15.1 20zm14 2v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="tsi107bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:closed-caption-add-sharp"} {...others} />);
}

export default Component;
