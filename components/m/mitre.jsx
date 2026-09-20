import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ywb28ib6z {
  fill: currentColor;
  d: path("M13 15V9h2.5V7H13V1h7v6h-2.5v2H20v6zm-9 8v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v6H8.5v2H11v6z");
}
</style><path class="ywb28ib6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mitre"} {...others} />);
}

export default Component;
