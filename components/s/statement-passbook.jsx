import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-wej_gio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5-2-9.5-1.5v14C7 18 10 18.5 12 20c2-1.5 5-2 9.5-1.5v-14C17 4 14 4.5 12 6m0 0v14M5.5 8.5h4m-4 3h4m-4 3h4m5-6h4m-4 3h4");
}
</style><path class="c-wej_gio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:statement-passbook"} {...others} />);
}

export default Component;
