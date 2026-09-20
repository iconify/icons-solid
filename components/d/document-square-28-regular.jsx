import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.k-nte2frq {
  fill: currentColor;
  d: path("M15.422 3c.73 0 1.429.29 1.944.806l6.828 6.828A2.75 2.75 0 0 1 25 12.578v9.672A2.75 2.75 0 0 1 22.25 25H5.75A2.75 2.75 0 0 1 3 22.25V5.75A2.75 2.75 0 0 1 5.75 3zM5.75 4.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h16.5c.69 0 1.25-.56 1.25-1.25V13h-5.75A2.75 2.75 0 0 1 15 10.25V4.5zm10.75 5.75c0 .69.56 1.25 1.25 1.25h5.19L16.5 5.06z");
}
</style><path class="k-nte2frq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-square-28-regular"} {...others} />);
}

export default Component;
