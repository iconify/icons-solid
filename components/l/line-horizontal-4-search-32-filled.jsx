import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.n2j5ypgbr {
  fill: currentColor;
  d: path("M28.75 25a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5zM18.5 1a7.5 7.5 0 0 1 6.111 11.844l6.023 6.022a1.25 1.25 0 0 1-1.768 1.768l-6.022-6.023A7.5 7.5 0 1 1 18.5 1m8.111 19.5H3.25a1.25 1.25 0 1 1 0-2.5h20.861zM9.854 11c.26.9.654 1.74 1.163 2.5H3.25a1.25 1.25 0 1 1 0-2.5zM18.5 3.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-7.793.5a9 9 0 0 0-.981 2.5H3.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="n2j5ypgbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-search-32-filled"} {...others} />);
}

export default Component;
