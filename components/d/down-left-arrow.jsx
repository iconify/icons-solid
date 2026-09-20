import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.ype8rpb3p {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m29.82 98.25l8.28-53.74l14.18 14.18l28.94-28.94l16.96 16.97l-28.94 28.93l14.32 14.33z");
}
</style><path class="ype8rpb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:down-left-arrow"} {...others} />);
}

export default Component;
