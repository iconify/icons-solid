import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.w3awjs2op {
  fill: currentColor;
  d: path("M16 26.329A4.5 4.5 0 0 1 12.5 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8.5c1.414 0 2.675.652 3.5 1.671A4.5 4.5 0 0 1 19.5 4H28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-8.5a4.5 4.5 0 0 1-3.5-1.671M17 8.5v15a2.5 2.5 0 0 0 2.5 2.5H28V6h-8.5A2.5 2.5 0 0 0 17 8.5m-2 0A2.5 2.5 0 0 0 12.5 6H4v20h8.5a2.5 2.5 0 0 0 2.5-2.5z");
}
</style><path class="w3awjs2op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:book-open-32-regular"} {...others} />);
}

export default Component;
