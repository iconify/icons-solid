import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqgp9vzfn {
  fill: currentColor;
  d: path("M5 21v-2H1V4h22v15h-4v2zm0-6h14l-4.5-6l-3.5 4.5l-2.5-3z");
}
</style><path class="dqgp9vzfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-frame-sharp"} {...others} />);
}

export default Component;
