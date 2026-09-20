import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z6rtbsbwj {
  fill: currentColor;
  d: path("m243.86 197.65l-14.25-120A20.06 20.06 0 0 0 209.67 60h-29.84a52 52 0 0 0-103.66 0H46.33a20.06 20.06 0 0 0-19.94 17.65l-14.25 120A20 20 0 0 0 32.08 220h191.84a20 20 0 0 0 19.94-22.35M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36M36.5 196L49.81 84H76v20a12 12 0 0 0 24 0V84h56v20a12 12 0 0 0 24 0V84h26.19l13.31 112Z");
}
</style><path class="z6rtbsbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:handbag-bold"} {...others} />);
}

export default Component;
