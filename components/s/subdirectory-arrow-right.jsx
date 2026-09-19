import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p88ps52_s {
  fill: currentColor;
  d: path("m19 15l-6 6l-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z");
}
</style><path class="p88ps52_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:subdirectory-arrow-right"} {...others} />);
}

export default Component;
