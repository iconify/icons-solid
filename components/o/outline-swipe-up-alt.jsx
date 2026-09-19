import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uf65xccsg {
  fill: currentColor;
  d: path("m13 5.83l1.59 1.59L16 6l-4-4l-4 4l1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3");
}
</style><path class="uf65xccsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-swipe-up-alt"} {...others} />);
}

export default Component;
