import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vh6_vvbig {
  fill: currentColor;
  d: path("M7.5 12.5q-.213 0-.356-.144T7 11.999t.144-.356t.356-.143h9q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="vh6_vvbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:check-indeterminate-small-outline-rounded"} {...others} />);
}

export default Component;
