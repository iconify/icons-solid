import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpsls5gij {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2z");
}
</style><path class="bpsls5gij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-food-bank"} {...others} />);
}

export default Component;
