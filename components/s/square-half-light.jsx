import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ro4oxv4fu {
  fill: currentColor;
  d: path("M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m-66 76h68v20h-68Zm0-12V86h68v20Zm0 44h68v20h-68Zm68-94v18h-68V54h66a2 2 0 0 1 2 2M54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2m146 2h-66v-20h68v18a2 2 0 0 1-2 2");
}
</style><path class="ro4oxv4fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-half-light"} {...others} />);
}

export default Component;
