import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.kb0bzubrw {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v.75h22v-.75A3.75 3.75 0 0 0 21.25 3zM25 9H3v10h22zm-6.42 4.25l-.89-1.002a.75.75 0 0 1 1.12-.996l1.998 2.247a.75.75 0 0 1 .013.987l-.01.012l-2 2.25a.75.75 0 1 1-1.122-.996l.89-1.002H9.42l.89 1.002a.75.75 0 0 1-1.12.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996l-.89 1.002zM25 20.5H3v.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25z");
}
</style><path class="kb0bzubrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-cells-merge-28-filled"} {...others} />);
}

export default Component;
