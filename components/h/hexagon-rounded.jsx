import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rgg0o-brg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m18.788 5.369l2.349 4.069q1.479 2.563 0 5.125l-2.35 4.068q-1.479 2.563-4.438 2.563H9.651q-2.959 0-4.439-2.563l-2.348-4.068Q1.384 12 2.863 9.438l2.349-4.069q1.48-2.563 4.439-2.563h4.698q2.959 0 4.439 2.563");
}
</style><path class="rgg0o-brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:hexagon-rounded"} {...others} />);
}

export default Component;
