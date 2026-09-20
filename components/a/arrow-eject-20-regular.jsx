import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.f64htsnuu {
  fill: currentColor;
  d: path("M9.598 5.2a.5.5 0 0 1 .8 0l4.499 6.001a.5.5 0 0 1-.4.8H5.503a.5.5 0 0 1-.4-.8zm1.6-.6c-.6-.8-1.8-.8-2.4 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4zM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z");
}
</style><path class="f64htsnuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-eject-20-regular"} {...others} />);
}

export default Component;
