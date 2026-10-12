import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mm7ms3bbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25V12.2l.78-.62l3.69-2.96L8 8l.78.62l3.69 2.96l.78.62v9.05H2.75zm8.5-17.5h10v4h-10zm5.75 4v3m-1.25 0h2.5v6.5h-2.5z");
}
</style><path class="mm7ms3bbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:renovation-roller-sharp"} {...others} />);
}

export default Component;
