import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.k9r3wac8s {
  fill: currentColor;
  d: path("m12.707 8l4.147-4.146a.5.5 0 0 0-.708-.708L12 7.293V3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1zM4 6a2 2 0 0 1 2-2h2.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-4v-4a2 2 0 0 0-2-2H4zm0 5h4a1 1 0 0 1 1 1v4H6a2 2 0 0 1-2-2z");
}
</style><path class="k9r3wac8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:contract-down-left-20-regular"} {...others} />);
}

export default Component;
