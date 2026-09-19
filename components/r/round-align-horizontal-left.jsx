import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n52ir9bar {
  fill: currentColor;
  d: path("M3 22c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v18c0 .55-.45 1-1 1M20.5 7h-13C6.67 7 6 7.67 6 8.5S6.67 10 7.5 10h13c.83 0 1.5-.67 1.5-1.5S21.33 7 20.5 7m-6 7h-7c-.83 0-1.5.67-1.5 1.5S6.67 17 7.5 17h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5");
}
</style><path class="n52ir9bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-align-horizontal-left"} {...others} />);
}

export default Component;
