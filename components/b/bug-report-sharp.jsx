import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.em33dqbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 8.75h9.5v12.5h-9.5zm1.5-2.5a3.25 3.25 0 0 1 6.5 0ZM7.25 14h-3.5m13 0h3.5m-12.5 4.25l-3 1.75m11.5-1.75l3 1.75M8.5 10.75L5.25 9m10.25 1.75L18.75 9M12 12.25v6");
}
</style><path class="em33dqbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bug-report-sharp"} {...others} />);
}

export default Component;
