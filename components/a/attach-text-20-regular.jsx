import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.chtvnbcmz {
  fill: currentColor;
  d: path("M6.5 4A2.5 2.5 0 0 0 4 6.5V14a.5.5 0 0 1-1 0V6.5a3.5 3.5 0 1 1 7 0v8.503A2 2 0 0 1 6 15V6.5a.5.5 0 0 1 1 0V15a1 1 0 1 0 2 0V6.5A2.5 2.5 0 0 0 6.5 4M12 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm-.5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="chtvnbcmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:attach-text-20-regular"} {...others} />);
}

export default Component;
