import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n__othdkq {
  fill: currentColor;
  d: path("M244 80v72a12 12 0 0 1-24 0v-43l-91.51 91.52a12 12 0 0 1-17 0l-96-96a12 12 0 0 1 17-17L120 175l83-83h-43a12 12 0 0 1 0-24h72a12 12 0 0 1 12 12");
}
</style><path class="n__othdkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-bold"} {...others} />);
}

export default Component;
