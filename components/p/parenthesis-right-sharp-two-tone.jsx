import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q62l-w1xl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.7142 1.6897L10.0098 2C12.5776 4.6962 14.0098 8.2767 14.0098 12C14.0098 15.7233 12.5776 19.3038 10.0098 22L9.7142 22.3103");
}
</style><path class="q62l-w1xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:parenthesis-right-sharp-two-tone"} {...others} />);
}

export default Component;
