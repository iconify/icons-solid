import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3ywu7b3w {
  fill: currentColor;
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107M11 12.171V7a1 1 0 0 0-2 0v5.171a3 3 0 1 0 2 0M16 7h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-1 3h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2");
}
</style><path class="b3ywu7b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thermostat-fill"} {...others} />);
}

export default Component;
