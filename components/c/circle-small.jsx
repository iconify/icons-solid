import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xpaf7jbho {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.25 12q0-1.968 1.391-3.359T12 7.25t3.359 1.391T16.75 12t-1.391 3.359T12 16.75t-3.359-1.391T7.25 12");
}
</style><path class="xpaf7jbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:circle-small"} {...others} />);
}

export default Component;
