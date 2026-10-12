import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zwdvox_ml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75h1.75v9l-1.15 8h-1.2l-1.15-8v-9zM12 5v2.25m-9.25 3L10.25 9m3.5 0l7.5 1.25m-12.5 9.5h6.5");
}
</style><path class="zwdvox_ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:glider-sharp"} {...others} />);
}

export default Component;
