import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vi8rmkbpg {
  fill: currentColor;
  d: path("M5 21V4.596q0-.69.463-1.153t1.153-.462h10.769q.69 0 1.153.462T19 4.596V21zm10.498-8q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293");
}
</style><path class="vi8rmkbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sensor-door"} {...others} />);
}

export default Component;
