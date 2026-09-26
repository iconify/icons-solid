import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hw10dub5n {
  fill: currentColor;
  d: path("M11.3505 21.7604C6.8469 17.9139 1 14.3082 1 8.75C1 5.1476 4.2844 2 8 2C9.4261 2 10.8308 2.479 12 3.2568C13.1692 2.479 14.5739 2 16 2C19.7156 2 23 5.1476 23 8.75C23 14.3082 17.1531 17.9139 12.6495 21.7604C12.2754 22.0799 11.7246 22.0799 11.3505 21.7604Z");
}
</style><path class="hw10dub5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heart-sharp-fill"} {...others} />);
}

export default Component;
