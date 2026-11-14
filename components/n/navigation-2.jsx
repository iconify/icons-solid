import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kpg0z2rsr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m18.46 8.837l-3.486 7.891q-.564 1.276-1.954 1.165t-1.745-1.459l-.624-2.372q-.149-.564-.713-.713l-2.372-.624q-1.348-.355-1.459-1.745t1.165-1.954l7.891-3.486q1.567-.692 2.778.519t.519 2.778");
}
</style><path class="kpg0z2rsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:navigation-2"} {...others} />);
}

export default Component;
