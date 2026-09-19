import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eo0j2s1tb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m6 10c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4v3L8 7l4-4v3c3.31 0 6 2.69 6 6");
}
</style><path class="eo0j2s1tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-replay-circle-filled"} {...others} />);
}

export default Component;
