import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vty-ythxu {
  fill: currentColor;
  d: path("M12 3.5a1 1 0 1 1 0 2H6.914L18.5 17.086V12a1 1 0 1 1 2 0v7.5a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h5.086L5.5 6.914V12a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1z");
}
</style><path class="vty-ythxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-top-left-bottom-right-24-filled"} {...others} />);
}

export default Component;
