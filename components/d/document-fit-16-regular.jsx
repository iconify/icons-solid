import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.fwrtlna6w {
  fill: currentColor;
  d: path("M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 1a1 1 0 0 1 1-1h1a.5.5 0 0 1 0 1H6v1a.5.5 0 0 1-1 0zm0 8a1 1 0 0 0 1 1h1a.5.5 0 0 0 0-1H6v-1a.5.5 0 0 0-1 0zm5-9a1 1 0 0 1 1 1v1a.5.5 0 0 1-1 0V4H9a.5.5 0 0 1 0-1zm1 9a1 1 0 0 1-1 1H9a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0z");
}
</style><path class="fwrtlna6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-fit-16-regular"} {...others} />);
}

export default Component;
