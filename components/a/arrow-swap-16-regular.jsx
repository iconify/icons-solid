import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.r5cmul4eu {
  fill: currentColor;
  d: path("M10.354 1.646a.5.5 0 0 0-.708.708L11.293 4H3.5a.5.5 0 0 0 0 1h7.793L9.646 6.646a.5.5 0 1 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708zm-4 7.708a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 12H12.5a.5.5 0 0 0 0-1H4.707z");
}
</style><path class="r5cmul4eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-swap-16-regular"} {...others} />);
}

export default Component;
