import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ka--1fbfx {
  fill: currentColor;
  d: path("M12 22.002c5.524 0 10.002-4.478 10.002-10.001c0-5.524-4.478-10.002-10.002-10.002S1.998 6.477 1.998 12.001c0 5.523 4.478 10.001 10.002 10.001m0-1.5A8.502 8.502 0 1 1 12 3.5a8.502 8.502 0 0 1 0 17.003");
}
</style><path class="ka--1fbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:radio-button-24-regular"} {...others} />);
}

export default Component;
