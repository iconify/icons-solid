import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.mnz4r2bxd {
  fill: currentColor;
  d: path("M26.75 4A3.25 3.25 0 0 1 30 7.25v17.5A3.25 3.25 0 0 1 26.75 28H5.25A3.25 3.25 0 0 1 2 24.75V7.25A3.25 3.25 0 0 1 5.25 4zM11 11a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6m8 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z");
}
</style><path class="mnz4r2bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:contact-card-generic-32-filled"} {...others} />);
}

export default Component;
