import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tzot29bax {
  fill: currentColor;
  d: path("M4.25 14.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M4.25 8.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M4.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M10 3a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 10 3m5.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5");
}
</style><path class="tzot29bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:office-apps-20-regular"} {...others} />);
}

export default Component;
