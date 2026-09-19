import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhopqtsdy {
  fill: currentColor;
  d: path("M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zm6.5 2h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5h2v3h-2z");
}
</style><path class="lhopqtsdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-high-quality"} {...others} />);
}

export default Component;
