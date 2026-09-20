import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.r9f-debkk {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M28.08 89.99h72v18h-72zm-.16-12.11h72L63.92 20z");
}
</style><path class="r9f-debkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:eject-button"} {...others} />);
}

export default Component;
