import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsni-ccqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 17.5V2.75h5.5V5.5c0 3.5 2.25 5 5.25 6.75c2.5 1.45 3.75 3.25 3.75 5.25Zm-1 0h16.5v3.75H3.75zm4 0v3.75M12 17.5v3.75m4.25-3.75v3.75");
}
</style><path class="bsni-ccqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:piano-upright-sharp"} {...others} />);
}

export default Component;
