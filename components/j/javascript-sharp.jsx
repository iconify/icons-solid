import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h112n5b1z {
  fill: currentColor;
  d: path("M6 15v-2.5h1.5v1H9V9h1.5v6zm6 0v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15z");
}
</style><path class="h112n5b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:javascript-sharp"} {...others} />);
}

export default Component;
