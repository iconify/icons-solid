import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.tlyt2x6ww {
  fill: currentColor;
  d: path("M29 5a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M9.793 7.793a1 1 0 0 1 1.414 1.414L5.414 15H24a1 1 0 0 1 0 2H5.414l5.793 5.793a1 1 0 0 1-1.414 1.414l-7.5-7.5a1 1 0 0 1 0-1.414z");
}
</style><path class="tlyt2x6ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-export-rtl-32-regular"} {...others} />);
}

export default Component;
