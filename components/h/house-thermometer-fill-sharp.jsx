import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pfo2fr5xa {
  fill: currentColor;
  d: path("M20.659 9.247c.217.19.341.465.341.753v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0ZM14.5 13.472V9.5a2.5 2.5 0 1 0-5 0v3.972a3.25 3.25 0 1 0 5 0m-2-3.972v4.373c0 .285.121.556.333.745a1.25 1.25 0 1 1-1.666 0a1 1 0 0 0 .333-.745V9.5a.5.5 0 0 1 1 0");
}
</style><path class="pfo2fr5xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-thermometer-fill-sharp"} {...others} />);
}

export default Component;
