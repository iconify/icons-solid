import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wi1156b9i {
  fill: currentColor;
  d: path("M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6l-4 4h3v6h2v-6h3z");
}
</style><path class="wi1156b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-open-in-browser"} {...others} />);
}

export default Component;
