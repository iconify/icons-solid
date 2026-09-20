import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8aq2shys {
  fill: currentColor;
  d: path("m9.2 15.6l2.8-2.1l2.75 2.1l-1.05-3.4l2.8-2.2h-3.4L12 6.6L10.9 10H7.5l2.75 2.2zM12 22q-3.475-.875-5.737-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22");
}
</style><path class="r8aq2shys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-police"} {...others} />);
}

export default Component;
