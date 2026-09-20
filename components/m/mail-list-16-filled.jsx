import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nnd_knvou {
  fill: currentColor;
  d: path("M10.912 8H14v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.337L7.763 9.44a.5.5 0 0 0 .474 0zM8.085 3c.066.186.168.356.297.5A1.5 1.5 0 0 0 8 4.5c0 .384.144.735.382 1a1.5 1.5 0 0 0 .595 2.406L8 8.432l-6-3.23V5a2 2 0 0 1 2-2zM9.5 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="nnd_knvou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-list-16-filled"} {...others} />);
}

export default Component;
