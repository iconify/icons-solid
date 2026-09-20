import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pqyqcubos {
  fill: currentColor;
  d: path("M10 15.689L6.712 12.4l.688-.688l2.6 2.6l6.6-6.6l.688.688z");
}
</style><path class="pqyqcubos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:check-small"} {...others} />);
}

export default Component;
