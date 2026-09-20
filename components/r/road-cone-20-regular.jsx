import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.sv3jrvb0y {
  fill: currentColor;
  d: path("M9.384 2a1 1 0 0 0-.966.742L4.616 17H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-2.116L11.582 2.742A1 1 0 0 0 10.616 2zM5.651 17l.8-3H11.5a.5.5 0 0 0 0-1H6.717l.534-2H10.5a.5.5 0 0 0 0-1H7.517l1.867-7h1.232l3.733 14z");
}
</style><path class="sv3jrvb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:road-cone-20-regular"} {...others} />);
}

export default Component;
