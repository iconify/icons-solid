import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h47nqikvi {
  fill: currentColor;
  d: path("M16.01 11H4v2h12.01v3L20 12l-3.99-4z");
}
</style><path class="h47nqikvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-arrow-right-alt"} {...others} />);
}

export default Component;
