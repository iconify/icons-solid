import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ode5ngbxa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.486 6.126L11 10.3V7a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748l-9 5A1 1 0 0 1 11 17v-3.3l-7.514 4.174A1 1 0 0 1 2 17V7a1 1 0 0 1 1.486-.874");
}
</style><path class="ode5ngbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fast-forward-bulk-sharp"} {...others} />);
}

export default Component;
