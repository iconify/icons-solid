import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rzehi4biu {
  fill: currentColor;
  d: path("M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-2.08-61.38a8 8 0 1 0-11.84 10.76L80 87.09V224a8 8 0 0 0 16 0V104.69l24 26.4V192a8 8 0 0 0 16 0v-43.31l66.08 72.69a8 8 0 1 0 11.84-10.76ZM88 44.43a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v4.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V64a8 8 0 0 0-16 0v16.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28.43a8 8 0 0 0 8 8M208 72a8 8 0 0 0-8 8v88.43a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8");
}
</style><path class="rzehi4biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:waveform-slash"} {...others} />);
}

export default Component;
