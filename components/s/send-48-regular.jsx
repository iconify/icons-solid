import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pce4gggmw {
  fill: currentColor;
  d: path("M4.128 6.964c-.62-1.899 1.358-3.603 3.145-2.71L42.757 21.99c1.658.83 1.658 3.196 0 4.025L7.273 43.752c-1.787.893-3.765-.812-3.145-2.71l5.557-17.04zm7.78 18.289L6.69 41.248l34.501-17.245L6.69 6.757l5.217 15.996H28.75a1.25 1.25 0 0 1 0 2.5z");
}
</style><path class="pce4gggmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:send-48-regular"} {...others} />);
}

export default Component;
