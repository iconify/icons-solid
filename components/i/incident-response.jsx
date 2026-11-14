import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4-jamgvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 17.5v-5a5.5 5.5 0 0 1 11 0v5M4 17.5h16V21H4Zm8-15V4M4 5l1.25 1.25M20 5l-1.25 1.25M12 10.5V15m-2.25-2.25h4.5");
}
</style><path class="c4-jamgvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:incident-response"} {...others} />);
}

export default Component;
