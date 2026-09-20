import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yg4y83-sx {
  fill: currentColor;
  d: path("M10.5 7h-4q-.625 0-1.062-.437T5 5.5t.438-1.062T6.5 4h11q.625 0 1.063.438T19 5.5t-.437 1.063T17.5 7h-4v11.5q0 .625-.437 1.063T12 20t-1.062-.437T10.5 18.5z");
}
</style><path class="yg4y83-sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:title-rounded"} {...others} />);
}

export default Component;
