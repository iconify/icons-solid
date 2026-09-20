import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdthv3bcv {
  fill: currentColor;
  d: path("M5.5 5q-.213 0-.356-.144T5 4.499t.144-.356T5.5 4h13q.213 0 .356.144t.144.357t-.144.356T18.5 5z");
}
</style><path class="tdthv3bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:maximize-outline-rounded"} {...others} />);
}

export default Component;
