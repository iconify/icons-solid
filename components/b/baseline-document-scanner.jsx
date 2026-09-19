import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8m22c_vn {
  fill: currentColor;
  d: path("M7 3H4v3H2V1h5zm15 3V1h-5v2h3v3zM7 21H4v-3H2v5h5zm13-3v3h-3v2h5v-5zm-1 0c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zM15 8H9v2h6zm0 3H9v2h6zm0 3H9v2h6z");
}
</style><path class="g8m22c_vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-document-scanner"} {...others} />);
}

export default Component;
