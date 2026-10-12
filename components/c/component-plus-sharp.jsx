import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mz42qteay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.71 3.46l1.58 1.58l.71.71l-.71.71l-1.58 1.58l-.71.71l-.71-.71l-1.58-1.58L9 5.75l.71-.71l1.58-1.58l.71-.71zM6.46 9.71l1.58 1.58l.71.71l-.71.71l-1.58 1.58l-.71.71l-.71-.71l-1.58-1.58l-.71-.71l.71-.71l1.58-1.58l.71-.71zm12.5 0l1.58 1.58l.71.71l-.71.71l-1.58 1.58l-.71.71l-.71-.71l-1.58-1.58l-.71-.71l.71-.71l1.58-1.58l.71-.71zm-6.25 6.25l1.58 1.58l.71.71l-.71.71l-1.58 1.58l-.71.71l-.71-.71l-1.58-1.58l-.71-.71l.71-.71l1.58-1.58l.71-.71z");
}
</style><path class="mz42qteay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:component-plus-sharp"} {...others} />);
}

export default Component;
