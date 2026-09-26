import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.getdngoom {
  fill: currentColor;
  d: path("M21 12C21 16.8325 16.8325 21 12 21C7.1675 21 3 16.8325 3 12C3 7.1675 7.1675 3 12 3C16.8325 3 21 7.1675 21 12Z");
}
</style><path class="getdngoom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:record-sharp-fill"} {...others} />);
}

export default Component;
