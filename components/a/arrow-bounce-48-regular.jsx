import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ea5s6n3cp {
  fill: currentColor;
  d: path("M4 14.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.295l16.706 16.494L41.872 15.36a1.25 1.25 0 1 1 1.756 1.78l-17.75 17.5a1.25 1.25 0 0 1-1.756 0L6.5 17.24v12.577a1.25 1.25 0 1 1-2.5 0z");
}
</style><path class="ea5s6n3cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bounce-48-regular"} {...others} />);
}

export default Component;
