import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lf-jgybhl {
  fill: currentColor;
  d: path("M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM7 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM7 8.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.5-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="lf-jgybhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:contact-card-generic-20-filled"} {...others} />);
}

export default Component;
