import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5a4fs08f {
  fill: currentColor;
  d: path("M4.038 13.963Q2 11.925 2 9t2.038-4.962T9 2t4.963 2.038T16 9t-2.037 4.963T9 16t-4.962-2.037M8 22v-4.05q.25.025.5.038T9 18q3.75 0 6.375-2.625T18 9q0-.25-.012-.5T17.95 8H22v14z");
}
</style><path class="u5a4fs08f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shapes-sharp"} {...others} />);
}

export default Component;
