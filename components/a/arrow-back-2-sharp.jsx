import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.my5a9-bfk {
  fill: currentColor;
  d: path("M16 19L5 12l11-7z");
}
</style><path class="my5a9-bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-back-2-sharp"} {...others} />);
}

export default Component;
