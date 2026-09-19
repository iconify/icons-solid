import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yzo69o-0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.49 19.79l2.037-3.529c.686-1.18-.143-2.599-1.387-2.599H12.88c-.304 0-.368.367-.097.495m0 0l8.93 5.804m-9.765 9.71c.367.159 1.393 1.93 1.457 2.154l11.673-.224c1.419-.031 3.077-.845 3.843-2.152l2.987-5.187m12.082-4.301H21.713L3.6 31.426c-.224.175-.032.51.223.447l40.311-10.924a.49.49 0 0 0 .367-.494a.5.5 0 0 0-.51-.494M38.11 30.338a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m-.001 0h-3.3");
}
</style><path class="yzo69o-0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:la-banque-postale-business"} {...others} />);
}

export default Component;
