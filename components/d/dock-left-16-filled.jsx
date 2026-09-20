import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o-u1vtvqs {
  d: path("M12.004 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 1H7v8h5.005a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="o-u1vtvqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dock-left-16-filled"} {...others} />);
}

export default Component;
