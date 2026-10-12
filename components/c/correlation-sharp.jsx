import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l078s3bdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h4.5v4.5h-4.5zm0 7h4.5v4.5h-4.5zm7 0h4.5v4.5h-4.5zm-7 7h4.5v4.5h-4.5zm7 0h4.5v4.5h-4.5zm7 0h4.5v4.5h-4.5z");
}
</style><path class="l078s3bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:correlation-sharp"} {...others} />);
}

export default Component;
