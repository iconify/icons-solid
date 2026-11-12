import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0zulnbdn {
  fill: currentColor;
  d: path("M7.707 8.707L4.414 12l3.293 3.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414m10-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414L19.586 12l-3.293-3.293a.999.999 0 1 1 1.414-1.414M10 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><path class="l0zulnbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:api-fill-round"} {...others} />);
}

export default Component;
