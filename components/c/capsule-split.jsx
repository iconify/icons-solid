import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zz883kx8p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.22 9.22l5-5q.054-.055.119-.097q2.721-1.785 5.022.516t.516 5.022q-.042.065-.097.119l-5 5l-5 5q-.054.055-.119.097q-2.721 1.785-5.022-.516t-.516-5.022q.042-.065.097-.119z");
}
</style><path class="zz883kx8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:capsule-split"} {...others} />);
}

export default Component;
