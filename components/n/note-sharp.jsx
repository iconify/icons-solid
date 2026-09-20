import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i_9ck6blq {
  fill: currentColor;
  d: path("M4 22V2h10l6 6v14zm9-13h5l-5-5z");
}
</style><path class="i_9ck6blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:note-sharp"} {...others} />);
}

export default Component;
