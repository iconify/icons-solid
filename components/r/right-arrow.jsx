import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.trcllmbdv {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M108.58 64L62.47 97.81V76.72H19.42V51.49h43.04v-21.3z");
}
</style><path class="trcllmbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:right-arrow"} {...others} />);
}

export default Component;
