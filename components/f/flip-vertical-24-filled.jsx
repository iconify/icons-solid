import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3jpncv2t {
  fill: currentColor;
  d: path("M19.547 2.163A1 1 0 0 1 20 3v7a1 1 0 0 1-1 1H3a1 1 0 0 1-.4-1.916l16-7a1 1 0 0 1 .947.08M7.781 9H18V4.529zM20 21.5a.5.5 0 0 1-.713.452l-17-8A.5.5 0 0 1 2.5 13h17a.5.5 0 0 1 .5.5z");
}
</style><path class="o3jpncv2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flip-vertical-24-filled"} {...others} />);
}

export default Component;
