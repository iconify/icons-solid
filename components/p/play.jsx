import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5b5z48vm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9.029 4.285l10 6c1.295.777 1.295 2.653 0 3.43l-10 6C7.696 20.515 6 19.555 6 18V6c0-1.555 1.696-2.515 3.029-1.715");
}
</style><path class="c5b5z48vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play"} {...others} />);
}

export default Component;
