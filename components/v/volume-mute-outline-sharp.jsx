import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kpm-8qbob {
  fill: currentColor;
  d: path("M7 15V9h4l5-5v16l-5-5zm2-2h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1");
}
</style><path class="kpm-8qbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:volume-mute-outline-sharp"} {...others} />);
}

export default Component;
