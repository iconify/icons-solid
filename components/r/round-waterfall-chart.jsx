import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z6xhhmyay {
  fill: currentColor;
  d: path("M19.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5m-15 9c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5S3 19.33 3 18.5v-4c0-.83.67-1.5 1.5-1.5m11-9c.83 0 1.5.67 1.5 1.5S16.33 7 15.5 7S14 6.33 14 5.5S14.67 4 15.5 4m-4 1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5v-1c0-.83.67-1.5 1.5-1.5m-3 5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S7 13.33 7 12.5v-1c0-.83.67-1.5 1.5-1.5");
}
</style><path class="z6xhhmyay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-waterfall-chart"} {...others} />);
}

export default Component;
