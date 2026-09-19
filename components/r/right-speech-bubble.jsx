import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.m3-aszbst {
  fill: var(--svg-color--67b0dd, #67b0dd);
  d: path("M31.909 5.792C14.286 5.792 0 15.347 0 27.133c0 6.611 4.493 12.518 11.546 16.433c-.871 2.876-3.374 6.488-9.716 9.889c0 0-1.83 1.235 0 2.747c0 0 12.266.725 20.98-8.61c2.882.575 5.931.887 9.1.887c17.62 0 31.905-9.555 31.905-21.342c0-11.79-14.285-21.345-31.904-21.345");
}
</style><path class="m3-aszbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:right-speech-bubble"} {...others} />);
}

export default Component;
