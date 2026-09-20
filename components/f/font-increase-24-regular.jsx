import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x-6-sdb6o {
  fill: currentColor;
  d: path("M15.195 5.754a.75.75 0 0 0 1.06.05l2.245-2.04l2.246 2.04a.75.75 0 0 0 1.009-1.109l-2.75-2.5a.75.75 0 0 0-1.01 0l-2.75 2.5a.75.75 0 0 0-.05 1.06M12 4a.75.75 0 0 1 .697.473l5.75 14.5a.75.75 0 0 1-1.394.553L15.258 15H8.742l-1.795 4.526a.75.75 0 1 1-1.394-.553l5.75-14.5A.75.75 0 0 1 12 4m-2.663 9.5h5.326L12 6.785z");
}
</style><path class="x-6-sdb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:font-increase-24-regular"} {...others} />);
}

export default Component;
