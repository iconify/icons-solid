import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nl0e5bb7y {
  fill: currentColor;
  d: path("M12 11v2h2v2H9V9h7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4z");
}
</style><path class="nl0e5bb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-g-mobiledata"} {...others} />);
}

export default Component;
