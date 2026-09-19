import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dshc49bdi {
  fill: currentColor;
  d: path("m14 6l-4.22 5.63l1.25 1.67L14 9.33L19 16h-8.46l-4.01-5.37L1 18h22zM5 16l1.52-2.03L8.04 16z");
}
</style><path class="dshc49bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-filter-hdr"} {...others} />);
}

export default Component;
