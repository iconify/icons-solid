import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k09zefbkr {
  fill: currentColor;
  d: path("M24 4c.69 0 1.25.56 1.25 1.25v37.5a1.25 1.25 0 1 1-2.5 0V5.25c0-.69.56-1.25 1.25-1.25m-8.75 7c.69 0 1.25.56 1.25 1.25v23.5a1.25 1.25 0 1 1-2.5 0v-23.5c0-.69.56-1.25 1.25-1.25m17.5 0c.69 0 1.25.56 1.25 1.25v23.5a1.25 1.25 0 1 1-2.5 0v-23.5c0-.69.56-1.25 1.25-1.25m-25.5 7c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25m33.5 0c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25");
}
</style><path class="k09zefbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:device-eq-48-regular"} {...others} />);
}

export default Component;
