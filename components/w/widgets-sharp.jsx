import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lcewj0s3w {
  fill: currentColor;
  d: path("m16.304 11.962l-4.227-4.227l4.227-4.227l4.227 4.227zM4.615 10.616v-6h6v6zm8.77 8.769v-6h6v6zm-8.77 0v-6h6v6z");
}
</style><path class="lcewj0s3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:widgets-sharp"} {...others} />);
}

export default Component;
