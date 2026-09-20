import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.jdbyd65or {
  fill: currentColor;
  d: path("m6.648 1.954l-4.76 4.728a1.49 1.49 0 0 0 0 2.12l3.31 3.287c.488.485 1.226.57 1.802.255V10a2 2 0 0 1 1.5-1.937V8a3 3 0 0 1 3.98-2.836l.016-2.153a1.507 1.507 0 0 0-1.52-1.511l-3.263.014c-.4.001-.783.16-1.065.44");
}
</style><path class="jdbyd65or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tag-lock-accent-16-filled"} {...others} />);
}

export default Component;
