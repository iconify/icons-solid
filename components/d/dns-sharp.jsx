import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gvj_t0b6c {
  fill: currentColor;
  d: path("M7.498 9.116q.416 0 .709-.291q.293-.292.293-.707q0-.416-.291-.71t-.707-.293t-.709.291t-.293.707t.291.709t.707.294m0 8.769q.415 0 .709-.292t.293-.706t-.291-.709t-.707-.294t-.709.292t-.293.706t.291.71t.707.293M4 11.615v-7h16v7zm0 8.77v-7h16v7z");
}
</style><path class="gvj_t0b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dns-sharp"} {...others} />);
}

export default Component;
