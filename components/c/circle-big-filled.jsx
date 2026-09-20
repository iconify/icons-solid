import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ctuz6eght {
  fill: currentColor;
  d: path("M19.5 10a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0");
}
</style><path class="ctuz6eght"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:circle-big-filled"} {...others} />);
}

export default Component;
