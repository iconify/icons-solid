import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5348ebvt {
  fill: currentColor;
  d: path("M20 21v-4.5h-2v-9h2V3h1v18zM3 21V3h1v4.5h2v9H4V21z");
}
</style><path class="e5348ebvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-justify-space-between-sharp"} {...others} />);
}

export default Component;
