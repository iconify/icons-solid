import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.askelcczv {
  fill: currentColor;
  d: path("M3.925 22q-.425 0-.675-.25T3 21V4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4v17q-.025.5-.275.75t-.675.25q-1.925 0-3.6-1.65T14.275 17H9.7q-.5 1.7-2.175 3.35T3.925 22M10 15h4V4h-4z");
}
</style><path class="askelcczv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shades-rounded"} {...others} />);
}

export default Component;
