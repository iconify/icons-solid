import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w45banbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 5.938a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm1.25 2.165l-3.5 6.062M7.804 7.268l10.392 6m-7.446.897l-5.781 3.013m5.781-3.013l.281 6.513M3.5 11q0-5.5 5-8");
}
</style><path class="w45banbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:person-falling"} {...others} />);
}

export default Component;
