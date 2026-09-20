import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ctyw23jfq {
  fill: currentColor;
  d: path("M19.646 19.646q-.165.166-.356.166q-.192 0-.357-.166L4.353 5.067q-.145-.146-.155-.347t.156-.366q.165-.165.357-.165t.356.165l14.58 14.579q.145.146.155.347t-.156.366m-9.615 0q-.165.166-.357.166t-.357-.166l-4.963-4.963q-.146-.147-.156-.348t.156-.366t.357-.165t.356.165l4.964 4.964q.146.146.156.347t-.156.366");
}
</style><path class="ctyw23jfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:resize-window-outline-rounded"} {...others} />);
}

export default Component;
