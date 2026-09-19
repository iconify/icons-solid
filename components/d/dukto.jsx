import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l7u2mqbuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.614 4.5h8.772c6.199 0 11.19.791 11.19 1.774v14.662c0 .983-4.991 1.774-11.19 1.774h-8.772c-6.199 0-11.19-.791-11.19-1.774V6.274c0-.983 4.991-1.774 11.19-1.774M33.99 23.22l.003.049v18.427c0 1-4.491 1.804-10.07 1.804s-10.07-.805-10.07-1.804V23.269l.004-.048");
}
</style><path class="l7u2mqbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dukto"} {...others} />);
}

export default Component;
