import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.po40rbvpr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11.514 6.126A1 1 0 0 1 13 7v3.3l7.514-4.174A1 1 0 0 1 22 7v10a1 1 0 0 1-1.486.874L13 13.7V17a1 1 0 0 1-1.486.874l-9-5a1 1 0 0 1 0-1.748Z");
}
</style><path class="po40rbvpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rewind-bulk-sharp"} {...others} />);
}

export default Component;
