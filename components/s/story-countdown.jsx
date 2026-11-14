import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ujb_778_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.896 3.988a9.5 9.5 0 0 1 10.208 0m2.908 2.908a9.5 9.5 0 0 1 0 10.208m-2.908 2.908a9.5 9.5 0 0 1-10.208 0m-2.908-2.908a9.5 9.5 0 0 1 0-10.208M12 12l3.25-3.25M12 12h.01");
}
</style><path class="ujb_778_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:story-countdown"} {...others} />);
}

export default Component;
