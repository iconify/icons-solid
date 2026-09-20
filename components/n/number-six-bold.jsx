import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.id47rsb9v {
  fill: currentColor;
  d: path("M128 100a59 59 0 0 0-7.81.53l26.27-46.64a12 12 0 0 0-20.92-11.78L76 130.13A60 60 0 1 0 128 100m0 96a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="id47rsb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-six-bold"} {...others} />);
}

export default Component;
