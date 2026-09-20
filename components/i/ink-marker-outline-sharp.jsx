import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-nw7fb5g {
  fill: currentColor;
  d: path("m6.839 20.016l-.835-.835L4.6 20.585l-1.135-1.158l1.393-1.392l-.835-.846l13.21-13.21l2.826 2.827zm4.261-8.477l-5.661 5.65L6.85 18.6l5.65-5.661z");
}
</style><path class="t-nw7fb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ink-marker-outline-sharp"} {...others} />);
}

export default Component;
