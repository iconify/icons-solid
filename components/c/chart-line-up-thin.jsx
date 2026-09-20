import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bqfnob6id {
  fill: currentColor;
  d: path("M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v118.34l57.17-57.17a4 4 0 0 1 5.66 0L128 138.34L190.34 76H160a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-8 0V81.66l-65.17 65.17a4 4 0 0 1-5.66 0L96 117.66l-60 60V204h188a4 4 0 0 1 4 4");
}
</style><path class="bqfnob6id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-line-up-thin"} {...others} />);
}

export default Component;
