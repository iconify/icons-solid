import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nhowpccxj {
  fill: currentColor;
  d: path("M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m34-70a6 6 0 0 0-6 6v192a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6m40-16a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6");
}
</style><path class="nhowpccxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:waveform-light"} {...others} />);
}

export default Component;
