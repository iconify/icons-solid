import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-7tr6byc {
  fill: currentColor;
  d: path("M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z");
}
</style><path class="d-7tr6byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-contrast"} {...others} />);
}

export default Component;
