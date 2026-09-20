import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a7ze7lbvx {
  fill: currentColor;
  d: path("M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 86h84v84H38Zm96-12V54h36v20Zm-12 0H86V54h36Zm0 108v20H86v-20Zm12 0h36v20h-36Zm0-12V86h84v84Zm84-114v18h-36V54h34a2 2 0 0 1 2 2M40 54h34v20H38V56a2 2 0 0 1 2-2m-2 146v-18h36v20H40a2 2 0 0 1-2-2m178 2h-34v-20h36v18a2 2 0 0 1-2 2");
}
</style><path class="a7ze7lbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:film-strip-light"} {...others} />);
}

export default Component;
