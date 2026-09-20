import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ca8axbb3p {
  fill: currentColor;
  d: path("M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2-1H7a2 2 0 0 1-1.773 1.987l-.463 4.164A2 2 0 0 1 6 12h5a2 2 0 0 1 1.236-1.849l-.463-4.164A2 2 0 0 1 10 4m1.268 9H5.732a2 2 0 1 1-1.959-2.987l.463-4.164A2 2 0 1 1 6.732 3h3.536A2 2 0 0 1 14 4a2 2 0 0 1-1.236 1.849l.463 4.164A2 2 0 1 1 11.267 13M3 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m2-9a1 1 0 1 0 0 2a1 1 0 0 0 0-2m7 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1.965-4.396A4.502 4.502 0 0 1 13 16.5A4.5 4.5 0 0 1 9.645 15h.855a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.725a5.5 5.5 0 1 0 4.85-9.21z");
}
</style><path class="ca8axbb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:crop-interim-20-regular"} {...others} />);
}

export default Component;
