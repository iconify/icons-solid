import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lu76-9r4y {
  fill: currentColor;
  d: path("m12 2.192l8.512 5.054q.219.16.353.394q.135.235.135.51v10.235q0 .69-.462 1.153T19.385 20H4.615q-.69 0-1.152-.462T3 18.384V8.15q0-.275.135-.51q.134-.234.354-.394zm0 10.458L19.8 8L12 3.35L4.2 8z");
}
</style><path class="lu76-9r4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:drafts"} {...others} />);
}

export default Component;
