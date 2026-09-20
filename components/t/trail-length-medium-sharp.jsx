import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p6ff5mbzg {
  fill: currentColor;
  d: path("M7 17v-2h5q-.35-.425-.562-.925T11.1 13H5v-2h6.1q.125-.575.338-1.075T12 9H7V7h9q2.075 0 3.538 1.463T21 12t-1.463 3.538T16 17zm-4 0v-2h3v2z");
}
</style><path class="p6ff5mbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:trail-length-medium-sharp"} {...others} />);
}

export default Component;
