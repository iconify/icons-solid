import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mh3nik91q {
  fill: currentColor;
  d: path("m13 17l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-9 0v-2h2v2zm4 0l2-8H6V7h4.25q.725 0 1.238.538T12 8.8l-.05.45L10 17z");
}
</style><path class="mh3nik91q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-0-7x"} {...others} />);
}

export default Component;
