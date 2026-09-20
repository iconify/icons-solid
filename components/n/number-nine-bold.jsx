import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u5i6g40vr {
  fill: currentColor;
  d: path("M188 96a60 60 0 1 0-60 60a59 59 0 0 0 7.81-.53l-26.27 46.64a12 12 0 0 0 20.92 11.78l49.54-88A59.57 59.57 0 0 0 188 96m-96 0a36 36 0 1 1 36 36a36 36 0 0 1-36-36");
}
</style><path class="u5i6g40vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-nine-bold"} {...others} />);
}

export default Component;
