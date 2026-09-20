import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bbkmkdcff {
  fill: currentColor;
  d: path("M240 84h-6.3l-8.61-40.19A20.11 20.11 0 0 0 205.53 28H50.47a20.11 20.11 0 0 0-19.56 15.81L22.3 84H16a12 12 0 0 0 0 24h4v92a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-92h4a12 12 0 0 0 0-24M53.7 52h148.6l6.86 32H46.84ZM64 196H44v-16h20Zm128 0v-16h20v16Zm20-40h-32v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24H44v-48h168Z");
}
</style><path class="bbkmkdcff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:jeep-bold"} {...others} />);
}

export default Component;
