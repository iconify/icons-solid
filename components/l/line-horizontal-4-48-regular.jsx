import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.z1c_i1nlq {
  fill: currentColor;
  d: path("M42.75 38a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0-10a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0-10a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5zm0-10a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="z1c_i1nlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-48-regular"} {...others} />);
}

export default Component;
