import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yl0-wszaf {
  fill: currentColor;
  d: path("M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L12 4.98L13.87 10zm10.37 8l-3-3v2H5v2h12.5v2z");
}
</style><path class="yl0-wszaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-text-rotation-none"} {...others} />);
}

export default Component;
