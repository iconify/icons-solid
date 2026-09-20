import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9ji4x-0t {
  fill: currentColor;
  d: path("M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12");
}
</style><path class="n9ji4x-0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-unknown-24-regular"} {...others} />);
}

export default Component;
