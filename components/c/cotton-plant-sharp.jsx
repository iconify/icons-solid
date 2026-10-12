import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pe166-t2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5a2.06 2.06 0 0 1-3.7-1.35a2.06 2.06 0 0 1-1.96-3.4a2.06 2.06 0 0 1 .68-3.87a2.06 2.06 0 0 1 3.01-2.53a2.06 2.06 0 0 1 3.94 0a2.06 2.06 0 0 1 3.01 2.52a2.06 2.06 0 0 1 .68 3.88a2.06 2.06 0 0 1-1.96 3.4A2.06 2.06 0 0 1 12 15.5Zm0-5.75v5.5m0-5.5L7.24 7M12 9.75L16.76 7M12 16.75v2.625l2.25 1.875");
}
</style><path class="pe166-t2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cotton-plant-sharp"} {...others} />);
}

export default Component;
