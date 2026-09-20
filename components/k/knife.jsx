import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m6yn_v4dq {
  fill: currentColor;
  d: path("M231.87 32.13a27.84 27.84 0 0 0-39.32 0L18.34 206.4a8 8 0 0 0 3.86 13.45A160.7 160.7 0 0 0 58.4 224c32.95 0 65.92-10.2 96.95-30.23c31.76-20.5 50.19-43.82 51-44.81a8 8 0 0 0-.64-10.59L185.32 118l46.55-46.56a27.85 27.85 0 0 0 0-39.31M189.1 144.44a220.4 220.4 0 0 1-42.86 36.16c-34.43 22.1-69.94 30.92-105.77 26.3L146 101.33Zm31.46-84.3L174 106.7L157.32 90l46.55-46.56a11.8 11.8 0 0 1 16.69 16.69Z");
}
</style><path class="m6yn_v4dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:knife"} {...others} />);
}

export default Component;
