import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xtmz-cc3f {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm6 2v10a1 1 0 0 0 2 0v-3h2a4 4 0 0 0 0-8H9a1 1 0 0 0-1 1m2 5V8h2a1.999 1.999 0 0 1 1.732 3c-.357.619-1.017 1-1.732 1Z");
}
</style><path class="xtmz-cc3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-parking-fill"} {...others} />);
}

export default Component;
