import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.woxs-ozgl {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm0 14.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m4-1.5H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25c1.44.34 2.25 1.62 2.25 3.16V15h1z");
}
</style><path class="woxs-ozgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-doorbell"} {...others} />);
}

export default Component;
