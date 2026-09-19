import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kc-k8xkty {
  fill: currentColor;
  d: path("M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1s1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m2.19 12.19L6 18l3.81-8.19L18 6z");
}
</style><path class="kc-k8xkty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-explore"} {...others} />);
}

export default Component;
