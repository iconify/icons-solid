import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ny8bffbqt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123ZM10 5.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z");
}
</style><path clip-rule="evenodd" class="ny8bffbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:pinpoint-filled"} {...others} />);
}

export default Component;
