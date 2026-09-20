import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o-r7nr8tg {
  fill: currentColor;
  d: path("M13 2.5a.5.5 0 0 0-1 0v3.843L8.827 3.172a4 4 0 0 0-5.656 5.656l5.025 5.026a.5.5 0 0 0 .707-.708L3.879 8.121A3 3 0 0 1 8.12 3.88L11.243 7H7.499a.5.5 0 0 0 0 1h4.9a.6.6 0 0 0 .6-.6z");
}
</style><path class="o-r7nr8tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-redo-16-regular"} {...others} />);
}

export default Component;
