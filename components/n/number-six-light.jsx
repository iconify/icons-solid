import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ao5ne2b9r {
  fill: currentColor;
  d: path("M128 106a53.7 53.7 0 0 0-19.94 3.83L141.23 51a6 6 0 1 0-10.46-5.89l-49.54 88A54 54 0 1 0 128 106m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="ao5ne2b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-six-light"} {...others} />);
}

export default Component;
