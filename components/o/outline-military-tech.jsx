import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.milyehbul {
  fill: currentColor;
  d: path("M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51l-.99 2.34l-3.41.29l2.59 2.24L9.07 22L12 20.23L14.93 22l-.78-3.33l2.59-2.24l-3.41-.29l-.99-2.34l4.18-2.51c.3-.18.48-.5.48-.86m-6 .64l-2-1.2V4h2zm4-1.2l-2 1.2V4h2z");
}
</style><path class="milyehbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-military-tech"} {...others} />);
}

export default Component;
