import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fb757xbci {
  fill: currentColor;
  d: path("m241.73 135l-52 72a12 12 0 0 1-19.46 0L76 76.5L33.73 135a12 12 0 1 1-19.46-14l52-72a12 12 0 0 1 19.46 0L180 179.5l42.27-58.5a12 12 0 1 1 19.46 14");
}
</style><path class="fb757xbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wave-triangle-bold"} {...others} />);
}

export default Component;
