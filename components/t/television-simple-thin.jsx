import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ogqg7joll {
  fill: currentColor;
  d: path("M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34L82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z");
}
</style><path class="ogqg7joll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:television-simple-thin"} {...others} />);
}

export default Component;
