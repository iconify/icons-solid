import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkgb9wbql {
  fill: currentColor;
  d: path("M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75S9.75 8.76 9.75 10s1.01 2.25 2.25 2.25m4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zM21 3H3v18h18zm-2 16H5V5h14z");
}
</style><path class="fkgb9wbql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-portrait"} {...others} />);
}

export default Component;
