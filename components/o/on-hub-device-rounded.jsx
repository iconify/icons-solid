import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w_ti6-6pj {
  fill: currentColor;
  d: path("M9 21q-.425 0-.712-.288T8 20t.288-.712T9 19h6q.425 0 .713.288T16 20t-.288.713T15 21zm-1.075-3.925L7 5.15q-.075-.875.525-1.513T9 3h6q.875 0 1.475.637T17 5.15l-.925 11.925q-.05.4-.325.663t-.675.262h-6.15q-.4 0-.675-.262t-.325-.663");
}
</style><path class="w_ti6-6pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:on-hub-device-rounded"} {...others} />);
}

export default Component;
