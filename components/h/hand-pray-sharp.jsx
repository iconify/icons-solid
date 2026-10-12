import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qacvtk24h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c1.75 1.75 4 5.5 4 10.5a4 4 0 0 1-8 0c0-5 2.25-8.75 4-10.5Zm0 2v12.5m-2.5 3h5");
}
</style><path class="qacvtk24h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hand-pray-sharp"} {...others} />);
}

export default Component;
