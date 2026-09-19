import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kfzufdbnh {
  fill: currentColor;
  d: path("M7 3H4v3H2V1h5zm15 3V1h-5v2h3v3zM7 21H4v-3H2v5h5zm13-3v3h-3v2h5v-5zM19 4v16H5V4zm-4 4H9v2h6zm0 3H9v2h6zm0 3H9v2h6z");
}
</style><path class="kfzufdbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-document-scanner"} {...others} />);
}

export default Component;
