import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qeug37b8f {
  fill: currentColor;
  d: path("M6 2v13H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm2 0h11c.446 0 .839.296.962.725l2 7Q22 9.86 22 10v4a1 1 0 0 1-1 1h-5v4a3 3 0 1 1-6 0v-1c0-1.27-.804-2.405-2-2.83Z");
}
</style><path class="qeug37b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-down-fill-sharp"} {...others} />);
}

export default Component;
