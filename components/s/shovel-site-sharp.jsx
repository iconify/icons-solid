import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-arwj2fm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 13.25h8v8h-8v-3.5Zm4 0v-7m-2.25 0h4.5m-4.5 0v-3.5h4.5v3.5m-15 15c.5-3.5 2.1-5.25 3.5-5.25s3 1.75 3.5 5.25Z");
}
</style><path class="a-arwj2fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shovel-site-sharp"} {...others} />);
}

export default Component;
