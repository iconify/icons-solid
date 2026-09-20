import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vbfjdkb7w {
  fill: currentColor;
  d: path("M4 20V4h16v16zm14.23-3.346H5.77v1.807h12.46zm-12.46-.885h12.46v-1.808H5.77zm0-2.923h12.46V5.77H5.77zm0 3.808v1.807zm0-.885v-1.808zm0-2.923V5.77zm0 1.115v-1.115zm0 2.693v-.885z");
}
</style><path class="vbfjdkb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:post-outline"} {...others} />);
}

export default Component;
