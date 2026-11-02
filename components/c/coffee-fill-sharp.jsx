import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0buqvu2a {
  fill: currentColor;
  d: path("M6.894 6.447a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm4 0a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm4 0a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894ZM2 9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1h1a3 3 0 1 1 0 6h-1.251a8.004 8.004 0 0 1-8.755 5.937A8.005 8.005 0 0 1 2 13Zm16 2v2h1a1 1 0 0 0 0-2Z");
}
</style><path class="e0buqvu2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coffee-fill-sharp"} {...others} />);
}

export default Component;
