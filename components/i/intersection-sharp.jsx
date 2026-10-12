import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2ytgp9bx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75V8.5H2.75M15.5 2.75V8.5h5.75m-18.5 7H8.5v5.75m12.75-5.75H15.5v5.75M12 2.75v2.5m0 13.5v2.5M2.75 12h2.5m13.5 0h2.5");
}
</style><path class="k2ytgp9bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:intersection-sharp"} {...others} />);
}

export default Component;
