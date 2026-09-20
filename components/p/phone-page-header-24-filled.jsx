import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgcybubyf {
  fill: currentColor;
  d: path("M18 6.005V19.75A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V6.005zM15.75 2A2.25 2.25 0 0 1 18 4.25V5H6v-.75A2.25 2.25 0 0 1 8.25 2z");
}
</style><path class="lgcybubyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-page-header-24-filled"} {...others} />);
}

export default Component;
