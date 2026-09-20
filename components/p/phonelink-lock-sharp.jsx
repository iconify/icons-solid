import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.inuh8ybxb {
  fill: currentColor;
  d: path("M15 16v-5h1v-1q0-.825.588-1.412T18 8t1.413.588T20 10v1h1v5zm2-5h2v-1q0-.425-.288-.712T18 9t-.712.288T17 10zM5 23V1h14v6h-2V6H7v12h10v-1h2v6z");
}
</style><path class="inuh8ybxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:phonelink-lock-sharp"} {...others} />);
}

export default Component;
