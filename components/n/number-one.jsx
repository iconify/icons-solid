import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b7f-0yu7a {
  fill: currentColor;
  d: path("M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48");
}
</style><path class="b7f-0yu7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-one"} {...others} />);
}

export default Component;
