import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjh92dymg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM9.5 4.25V2.5m3.712 3.288L14.45 4.55m.3 4.95h1.75m-7 5.25v1.75m-3.712-3.288L4.55 14.45m-.3-4.95H2.5m3.288-3.712L4.55 4.55M15 21l6-6m-5.5.5h.01m4.99 5h.01");
}
</style><path class="sjh92dymg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:summer-sale"} {...others} />);
}

export default Component;
