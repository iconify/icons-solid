import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.bcjzqx11f {
  fill: currentColor;
  d: path("M23.654 2.118A.75.75 0 0 1 24 2.75v9.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.315-1.43l20.5-9.5a.75.75 0 0 1 .719.048M6.152 11.5H22.5V3.924zM24 25.25a.75.75 0 0 1-1.065.68l-20.5-9.5A.75.75 0 0 1 2.75 15h20.5a.75.75 0 0 1 .75.75z");
}
</style><path class="bcjzqx11f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flip-vertical-28-regular"} {...others} />);
}

export default Component;
