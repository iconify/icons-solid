import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq98y6b3s {
  fill: currentColor;
  d: path("M22 19.15L14.85 12H20V8h-9.15l-4-4H22zM4 12h5.15l-4-4H4zm16.45 11.3l-3.3-3.3H2V4h2l2 2H3.15L.65 3.5l1.425-1.425l19.8 19.8z");
}
</style><path class="eq98y6b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:credit-card-off-sharp"} {...others} />);
}

export default Component;
