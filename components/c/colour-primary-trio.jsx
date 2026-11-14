import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yf_j80b2h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.25 7q0-1.968 1.391-3.359T12 2.25t3.359 1.391T16.75 7t-1.391 3.359T12 11.75t-3.359-1.391T7.25 7m-4.109 6.641Q1.75 15.032 1.75 17t1.391 3.359T6.5 21.75t3.359-1.391T11.25 17t-1.391-3.359T6.5 12.25t-3.359 1.391M12.75 17q0-1.968 1.391-3.359T17.5 12.25t3.359 1.391T22.25 17t-1.391 3.359T17.5 21.75t-3.359-1.391T12.75 17");
}
</style><path class="yf_j80b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:colour-primary-trio"} {...others} />);
}

export default Component;
