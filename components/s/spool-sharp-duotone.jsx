import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.vkf3ktdoc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 7H4C3.448 7 3 6.552 3 6V2C3 1.448 3.448 1 4 1H12H20C20.552 1 21 1.448 21 2V6C21 6.552 20.552 7 20 7H18V17H20C20.552 17 21 17.448 21 18V22C21 22.552 20.552 23 20 23H4C3.448 23 3 22.552 3 22V18C3 17.448 3.448 17 4 17H6V7Z");
}

.vz69q4tlc {
  fill-rule: evenodd;
  d: path("M21 5V6C21 6.552 20.552 7 20 7H18H6H4C3.448 7 3 6.552 3 6V5H21ZM20.012 17C20.559 17.007 21 17.452 21 18V19H3V18C3 17.452 3.441 17.007 3.988 17H20.012ZM6 12.756L18 9.156V11.244L6 14.844V12.756Z");
}
</style><g class="cuyn6tgcc"><path class="vkf3ktdoc"/><path clip-rule="evenodd" class="vz69q4tlc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:spool-sharp-duotone"} {...others} />);
}

export default Component;
