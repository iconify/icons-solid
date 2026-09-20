import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qarpeykjt {
  fill: currentColor;
  d: path("M6.5 17.5h8q.213 0 .356.144t.144.357t-.144.356t-.356.143H6.308q-.343 0-.576-.232t-.232-.576V9.5q0-.213.144-.356T6.001 9t.356.144t.143.356zm5-5h8q.213 0 .356.144t.144.357t-.144.356t-.356.143h-8.192q-.343 0-.576-.232t-.232-.576V4.5q0-.213.144-.356T11.001 4t.356.144t.143.356z");
}
</style><path class="qarpeykjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:more-down-outline-rounded"} {...others} />);
}

export default Component;
