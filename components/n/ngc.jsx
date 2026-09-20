import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2_8qacwh {
  fill: var(--svg-color--ec1b2e, #ec1b2e);
  d: path("m15.599 12.704l-2.375.194l2.024-5.318l-6.186.868l-.661 5.89l1.48-.086L9.611 21zM9.062 7.962l6.11-.765l-2.88-1.246s.37-2.19-1.732-2.951l-.252.742s1.364.27 1.17 2.263z");
}
</style><path class="b2_8qacwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ngc"} {...others} />);
}

export default Component;
