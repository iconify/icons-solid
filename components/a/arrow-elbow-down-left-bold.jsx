import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mh5y9_4yk {
  fill: currentColor;
  d: path("M204 32v144a12 12 0 0 1-12 12H77l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L77 164h103V32a12 12 0 0 1 24 0");
}
</style><path class="mh5y9_4yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-down-left-bold"} {...others} />);
}

export default Component;
