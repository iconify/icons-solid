import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fi9b599qb {
  fill: currentColor;
  d: path("m7.75 19.75l-3.525-3.525q-.275-.275-.275-.7t.275-.7L14.8 4.225q.3-.3.725-.3t.7.3l3.525 3.55q.275.275.275.7t-.275.7L9.175 19.75q-.3.3-.712.3t-.713-.3");
}
</style><path class="fi9b599qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:highlighter-size-3-outline-rounded"} {...others} />);
}

export default Component;
