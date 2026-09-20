import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y9f2wn2lj {
  fill: currentColor;
  d: path("M64 84v88a4 4 0 0 1-4 4H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h28a4 4 0 0 1 4 4m93.15-58.15a8 8 0 0 0-10-.16l-65.57 51A4 4 0 0 0 80 79.84v96.32a4 4 0 0 0 1.55 3.15l65.57 51a8 8 0 0 0 9 .56a8.29 8.29 0 0 0 3.91-7.18V32.25a8.27 8.27 0 0 0-2.91-6.4Z");
}
</style><path class="y9f2wn2lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:speaker-none-fill"} {...others} />);
}

export default Component;
