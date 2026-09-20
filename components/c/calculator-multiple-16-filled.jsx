import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.baodtyzze {
  fill: currentColor;
  d: path("M4.5 1A2.5 2.5 0 0 0 2 3.5v8A2.5 2.5 0 0 0 4.5 14h6a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 10.5 1zM5 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3.031a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 3h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1.5 13a2.5 2.5 0 0 1-2-1h6a3.5 3.5 0 0 0 3.5-3.5v-8c.607.456 1 1.182 1 2v6a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="baodtyzze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calculator-multiple-16-filled"} {...others} />);
}

export default Component;
