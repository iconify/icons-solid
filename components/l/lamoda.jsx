import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qy7totapt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.172 5.5L7.82 34.866c-.288 2.517 1.318 4.4 4.014 4.706l1.348.153m25.403-5.615c-.527 4.614-5.002 7.93-9.945 7.37c-4.942-.561-8.555-4.796-8.028-9.41l.623-5.455c.527-4.614 5.002-7.93 9.945-7.37c4.942.561 8.555 4.796 8.028 9.41M37.627 42.5l2.587-22.654");
}
</style><path class="qy7totapt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lamoda"} {...others} />);
}

export default Component;
