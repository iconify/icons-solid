import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ff6kebdiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L14.0718 3C14.5689 3 14.9905 3.3651 15.0615 3.8571C15.4416 6.4901 17.5099 8.5584 20.1429 8.9385C20.6349 9.0095 21 9.4311 21 9.9282L21 21");
}
</style><path class="ff6kebdiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:corner-inverted"} {...others} />);
}

export default Component;
