import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.zzc1w0gob {
  fill: currentColor;
  d: path("M3 3v18h18V3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z");
}
</style><path class="k4n51fjcs"/><path class="zzc1w0gob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-21mp"} {...others} />);
}

export default Component;
