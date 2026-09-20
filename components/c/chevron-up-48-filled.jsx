import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gcosbhb5k {
  fill: currentColor;
  d: path("M39.56 32.06a1.5 1.5 0 0 1-2.12 0L24 18.622l-13.44 13.44a1.5 1.5 0 0 1-2.12-2.122l14.5-14.5a1.5 1.5 0 0 1 2.12 0l14.5 14.5a1.5 1.5 0 0 1 0 2.122");
}
</style><path class="gcosbhb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-up-48-filled"} {...others} />);
}

export default Component;
