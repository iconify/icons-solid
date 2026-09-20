import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fyy65d0hz {
  fill: currentColor;
  d: path("M9 14h1v1h1.5v-1h1v1H14v-1h1V8h-1.5V6h-3v2H9zm2.5-6V7h1v1zM5 21V3h14v18l-7-3z");
}
</style><path class="fyy65d0hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmark-bag-sharp"} {...others} />);
}

export default Component;
