import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s90rsqb4w {
  fill: currentColor;
  d: path("M5 21V3h14v18zm7-10.885l2-1.192l2 1.192V4h-4z");
}
</style><path class="s90rsqb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:book-sharp"} {...others} />);
}

export default Component;
