import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnjd1qbss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 15l-4.586 4.586c-.412.412-1.107.03-.98-.538l1.24-5.584A1.203 1.203 0 0 0 7.5 12a.975.975 0 0 1-.89-1.37l2.862-6.442A2 2 0 0 1 11.3 3H15c.891 0 1.45.963 1.008 1.736l-2.016 3.528A1.16 1.16 0 0 0 15 10h1a.828.828 0 0 1 .586 1.414z");
}
</style><path class="fnjd1qbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-alt-round"} {...others} />);
}

export default Component;
