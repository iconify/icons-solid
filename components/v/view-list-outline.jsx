import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lz7k8bb2z {
  fill: currentColor;
  d: path("M9 18h11v-2.675H9zM4 8.675h3V6H4zm0 4.675h3v-2.675H4zM4 18h3v-2.675H4zm5-4.65h11v-2.675H9zm0-4.675h11V6H9zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z");
}
</style><path class="lz7k8bb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-list-outline"} {...others} />);
}

export default Component;
