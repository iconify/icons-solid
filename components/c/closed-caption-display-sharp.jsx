import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4wcp7b2z {
  fill: currentColor;
  d: path("M11 22v-8h11v8zm2-2h7v-4h-7zM3 20V4h18v8h-6.5v-1.5h2v.5H18V9h-5v3H9v1.5H7.5v-3h2v.5H11V9H6v6h3v5z");
}
</style><path class="y4wcp7b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:closed-caption-display-sharp"} {...others} />);
}

export default Component;
