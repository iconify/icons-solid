import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agx40l_hp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5-2-9.5-1.5V19c4.5-.5 7.5 0 9.5 1.5c2-1.5 5-2 9.5-1.5V4.5C17 4 14 4.5 12 6Zm0 0v14.5M5.5 10l3.5.25m6 0l3.5-.25");
}
</style><path class="agx40l_hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dictionary-open"} {...others} />);
}

export default Component;
