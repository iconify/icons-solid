import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clo0pwgdq {
  fill: currentColor;
  d: path("M12 22L6 12l6-10l6 10zm0-3.9l3.675-6.1L12 5.9L8.325 12zm0-6.1");
}
</style><path class="clo0pwgdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hov-outline"} {...others} />);
}

export default Component;
