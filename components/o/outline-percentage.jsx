import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkeawxbbj {
  fill: currentColor;
  d: path("m18.501 3.5l-15 15.001l1.996 1.996l15-15zM17.003 14a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M17 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7.003 4a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M7 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="fkeawxbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-percentage"} {...others} />);
}

export default Component;
