import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eve15bbpc {
  fill: currentColor;
  d: path("M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21");
}
</style><path class="eve15bbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-room-service"} {...others} />);
}

export default Component;
