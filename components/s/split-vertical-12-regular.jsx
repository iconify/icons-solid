import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.bh9h_3zcs {
  fill: currentColor;
  d: path("M5.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5m-3 1H4v1H2.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H4v1H2.5A1.5 1.5 0 0 1 1 8.5v-5A1.5 1.5 0 0 1 2.5 2m6 7H7v1h1.5A1.5 1.5 0 0 0 10 8.5v-5A1.5 1.5 0 0 0 8.5 2H7v1h1.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5");
}
</style><path class="bh9h_3zcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-vertical-12-regular"} {...others} />);
}

export default Component;
