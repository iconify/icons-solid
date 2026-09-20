import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z5jhbbbbt {
  fill: currentColor;
  d: path("m11.5 17l3-6h-2V7l-3 6h2zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="z5jhbbbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-charge-sharp"} {...others} />);
}

export default Component;
