import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.irqzv5bcz {
  fill: currentColor;
  d: path("M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h20v6zm9 10h2zm-5-5v-2zm12 0v-2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2z");
}
</style><path class="irqzv5bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:widget-width-outline-sharp"} {...others} />);
}

export default Component;
