import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v39jgiklq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v7H4.75zm3 3.5h8.5m-8.5 3.5h8.5v8.5h-8.5zM10 13h4m-4.75 5.25h5.5v3h-5.5z");
}
</style><path class="v39jgiklq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flash-speedlight-sharp"} {...others} />);
}

export default Component;
