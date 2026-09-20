import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i46drvbai {
  fill: currentColor;
  d: path("M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-94-50a14 14 0 1 0-14-14a14 14 0 0 0 14 14m0 100a14 14 0 1 0 14 14a14 14 0 0 0-14-14");
}
</style><path class="i46drvbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:divide-light"} {...others} />);
}

export default Component;
