import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pr_1xptgu {
  fill: currentColor;
  d: path("M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v40h-40V56ZM96 56v40H56V56Z");
}
</style><path class="pr_1xptgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:magnet-straight-fill"} {...others} />);
}

export default Component;
