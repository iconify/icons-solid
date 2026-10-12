import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r9571tk0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.15v13.1M8.5 7.5h7c.55.9.9 1.7.9 2.6H7.6c0-.9.35-1.7.9-2.6m-2.5 5h12c.6 1 .9 2 .9 3.25H5.1c0-1.25.3-2.25.9-3.25m-2.75 5.75h17.5L19.3 20.6a1.5 1.5 0 0 1-1.28.65H6.13a1.5 1.5 0 0 1-1.28-.65ZM12 2.75h4l-1 1.2l1 1.2h-4Z");
}
</style><path class="r9571tk0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mast-sail"} {...others} />);
}

export default Component;
