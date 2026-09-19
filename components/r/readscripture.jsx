import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x2k9zs7rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.795 33.018H5.5V7.473h37v25.582H32.318M24 7.474v17.185m-.154 3.638v12.23m-4.257-7.509h8.75M11.306 14.053h8.127m-8.36 6.473h8.594m-8.731 6.432h8.675m9.661-12.891h8.292m-8.374 6.377h8.484m-8.428 6.376h8.566");
}
</style><path class="x2k9zs7rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:readscripture"} {...others} />);
}

export default Component;
