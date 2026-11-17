import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lc8aa9bru {
  fill: currentColor;
  d: path("M3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5m9-4.414l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 14l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 15.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 14l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="lc8aa9bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-close-fill-round"} {...others} />);
}

export default Component;
