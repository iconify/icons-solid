import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lnmf6ybei {
  fill: currentColor;
  d: path("M24 16a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0 11.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-3.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0");
}
</style><path class="lnmf6ybei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-vertical-48-filled"} {...others} />);
}

export default Component;
