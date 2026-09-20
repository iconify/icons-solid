import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q2_7hdbuo {
  fill: currentColor;
  d: path("M8.5 12.5v4q0 .213-.144.356T7.999 17t-.356-.144T7.5 16.5v-9q0-.213.144-.356T8.001 7t.356.144t.143.356v4h7v-4q0-.213.144-.356T16.001 7t.356.144t.143.356v9q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356v-4z");
}
</style><path class="q2_7hdbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:h-mobiledata-outline-rounded"} {...others} />);
}

export default Component;
