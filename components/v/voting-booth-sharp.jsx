import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax6y8bc8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v3H2.75zm1.75 3h15v11.5h-15v-1Zm4 0v11.5M12 5.75v11.5m3.5-11.5v11.5m-6.25 0v4m5.5-4v4");
}
</style><path class="ax6y8bc8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:voting-booth-sharp"} {...others} />);
}

export default Component;
