import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.sxqqf9bta {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M58 42.8L42.8 58H21.2L6 42.8V21.2L21.2 6h21.6L58 21.2z");
}

.x7-361n6i {
  fill: var(--svg-color--e9edf2, #e9edf2);
  d: path("M64 45.3L45.3 64H18.7L0 45.3V18.7L18.7 0h26.6L64 18.7z");
}
</style><path class="x7-361n6i"/><path class="sxqqf9bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:stop-sign"} {...others} />);
}

export default Component;
