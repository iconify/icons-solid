import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgxovtbim {
  fill: currentColor;
  d: path("M12 17.5q1.875 0 3.188-1.313T16.5 13q0-1.875-1.313-3.188T12 8.5q-1.875 0-3.188 1.313T7.5 13q0 1.875 1.313 3.188T12 17.5Zm0-1l-1.1-2.4L8.5 13l2.4-1.1L12 9.5l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4ZM2 21V5h5.15L9 3h6l1.85 2H22v16H2Zm2-2h16V7H4v12Zm8-6Z");
}
</style><path class="wgxovtbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-enhance-outline-sharp"} {...others} />);
}

export default Component;
