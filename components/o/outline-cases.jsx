import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfnfrnblf {
  fill: currentColor;
  d: path("M3 9H1v11c0 1.11.89 2 2 2h17v-2H3z");
}

.iipzb9rah {
  fill: currentColor;
  d: path("M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z");
}
</style><path class="gfnfrnblf"/><path class="iipzb9rah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-cases"} {...others} />);
}

export default Component;
