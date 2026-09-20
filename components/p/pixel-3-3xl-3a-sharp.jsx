import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qnjpmkbza {
  fill: currentColor;
  d: path("M9 6q.425 0 .713-.287Q10 5.425 10 5t-.287-.713Q9.425 4 9 4t-.712.287Q8 4.575 8 5t.288.713Q8.575 6 9 6ZM5 23V1h14v22Z");
}
</style><path class="qnjpmkbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pixel-3-3xl-3a-sharp"} {...others} />);
}

export default Component;
