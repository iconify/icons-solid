import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dydoqgobh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h12v12h-12zm6 0v12m-6-6h12m2.5-6h4v12h-4zm-14.5 14.5h12v4h-12zm14.75 2H21m-1.75-1.75V21");
}
</style><path class="dydoqgobh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lora-adapter-sharp"} {...others} />);
}

export default Component;
