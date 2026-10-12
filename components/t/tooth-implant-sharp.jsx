import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdbdnqqil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4.5V2.75h10.5V10H6.75V7.25ZM10.5 10h3v2.5h-3zm-1.25 2.5h5.5l-1 7.75l-.374 1.064l-1.126-.064h-.5l-1.126.064l-.374-1.064Zm1 3h3.5m-3 3h2.5");
}
</style><path class="cdbdnqqil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tooth-implant-sharp"} {...others} />);
}

export default Component;
