import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xsobeac3y {
  fill: currentColor;
  d: path("M4 13H3a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8h1a1 1 0 0 1 0 2h-1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm9.8-4.4a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 11h-2Z");
}
</style><path class="xsobeac3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:meter-electricity-fill-sharp"} {...others} />);
}

export default Component;
