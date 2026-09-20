import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.irxjehbbg {
  fill: currentColor;
  d: path("M6.5 12.5q-.213 0-.356-.144T6 11.999t.144-.356t.356-.143h11q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="irxjehbbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:remove-outline-rounded"} {...others} />);
}

export default Component;
