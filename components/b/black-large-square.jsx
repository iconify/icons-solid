import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.fs6pmrb7r {
  fill: var(--svg-color--212121, #212121);
  d: path("M6.93 1C3.67 1 1 3.67 1 6.93v114.14c0 3.26 2.67 5.93 5.93 5.93h114.14c3.26 0 5.93-2.67 5.93-5.93V6.93c0-3.26-2.67-5.93-5.93-5.93z");
}
</style><path class="fs6pmrb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:black-large-square"} {...others} />);
}

export default Component;
