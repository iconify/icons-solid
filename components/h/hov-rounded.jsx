import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ai2at0-_r {
  fill: currentColor;
  d: path("M11.525 20.938q-.225-.113-.375-.363l-4.525-7.55q-.15-.25-.225-.5T6.325 12t.075-.525t.225-.5l4.525-7.55q.15-.25.375-.363T12 2.95t.475.112t.375.363l4.525 7.55q.15.25.225.5t.075.525t-.075.525t-.225.5l-4.525 7.55q-.15.25-.375.363T12 21.05t-.475-.112");
}
</style><path class="ai2at0-_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hov-rounded"} {...others} />);
}

export default Component;
