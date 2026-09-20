import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sx7xq8wsb {
  fill: currentColor;
  d: path("M20.8 23.6L18.2 21H3V5.8L.4 3.2l1.425-1.425l20.4 20.4zm.2-5.5l-4.75-4.75l2.75-3.1v-3l-4.175 4.675L5.9 3H21zM5 16.95l4-4L13.05 17l.55-.6l-5.45-5.45L5 14.1z");
}
</style><path class="sx7xq8wsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bid-landscape-disabled-sharp"} {...others} />);
}

export default Component;
