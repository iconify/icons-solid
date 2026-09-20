import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8j0ginoh {
  fill: currentColor;
  d: path("M4 20V4h16v16Zm2-2h12V6H6ZM6 6v12Z");
}
</style><path class="k8j0ginoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-maximize-outline-sharp"} {...others} />);
}

export default Component;
