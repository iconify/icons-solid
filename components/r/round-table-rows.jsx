import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf9r1d6vq {
  fill: currentColor;
  d: path("M19 8H5c-1.1 0-2-.9-2-2s.9-2 2-2h14c1.1 0 2 .9 2 2s-.9 2-2 2m0 2H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2m0 6H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2");
}
</style><path class="cf9r1d6vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-table-rows"} {...others} />);
}

export default Component;
