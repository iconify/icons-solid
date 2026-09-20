import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tkbvewbln {
  fill: currentColor;
  d: path("m16.5 13.675l3.5 3.5V8q0-1.4-.85-2.45T17 4.15V2h-3v2h-4V2H7v2.15L14.825 12H16.5zm3.275 8.925l-3.2-3.2h2.8L20 20q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V8q0-.825.313-1.55t.862-1.275l.975.975v2.825L1.4 4.225L2.8 2.8l18.375 18.4zM7.5 14h3.675l-2-2H7.5z");
}
</style><path class="tkbvewbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-backpack"} {...others} />);
}

export default Component;
