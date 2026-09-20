import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.h40kz-a6o {
  fill: currentColor;
  d: path("M8 2a4.5 4.5 0 0 0-3.155 7.708a.65.65 0 0 1 .18.287L5.3 11h5.4l.274-1.005a.65.65 0 0 1 .181-.287A4.5 4.5 0 0 0 8 2m2.427 10H5.573l.244.895A1.5 1.5 0 0 0 7.264 14h1.472a1.5 1.5 0 0 0 1.447-1.105z");
}
</style><path class="h40kz-a6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:lightbulb-16-filled"} {...others} />);
}

export default Component;
