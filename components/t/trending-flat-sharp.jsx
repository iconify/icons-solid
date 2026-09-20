import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y54jv0b_u {
  fill: currentColor;
  d: path("m17.192 15.808l-.713-.708l2.6-2.6H4v-1h15.079l-2.594-2.6l.713-.708L21 12z");
}
</style><path class="y54jv0b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:trending-flat-sharp"} {...others} />);
}

export default Component;
