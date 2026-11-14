import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ot4cf395h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 12.392V3.5c-4 0-7 .5-9 2c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2q.088-.066.179-.13M12 5.5v14m8.652-4.152za1.25 1.25 0 0 1 0 1.768l-3.536 3.536a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768l3.536-3.536a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="ot4cf395h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kb-article-edit"} {...others} />);
}

export default Component;
