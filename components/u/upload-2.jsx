import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzrmx8arg {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm5-4v-7H5l7-9l7 9h-4v7z");
}
</style><path class="jzrmx8arg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:upload-2"} {...others} />);
}

export default Component;
