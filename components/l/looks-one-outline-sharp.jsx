import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o4j75xs4y {
  fill: currentColor;
  d: path("M12 17h2V7h-4v2h2zm9 4H3V3h18zM5 19h14V5H5zM5 5v14z");
}
</style><path class="o4j75xs4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-one-outline-sharp"} {...others} />);
}

export default Component;
