import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdcntmbns {
  fill: currentColor;
  d: path("M19.543 9.428a2.998 2.998 0 0 1 0 5.144l-10 6A2.998 2.998 0 0 1 5 18V6a3 3 0 0 1 4.543-2.572Z");
}
</style><path class="vdcntmbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-fill"} {...others} />);
}

export default Component;
