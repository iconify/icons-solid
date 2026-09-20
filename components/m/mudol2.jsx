import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-xlkgbne {
  fill: var(--svg-color--f95d33, #f95d33);
  d: path("m12 3l8 4.5v.075l-2.51 1.4L12 5.95L6.5 8.97v6.05l5.5 3.02l5.485-3.015L20 16.49v.01L12 21l-8-4.5v-9z");
}

.ft5dv1b6b {
  fill: none;
}

.o68ejzmrf {
  fill: var(--svg-color--3c7547, #3c7547);
  d: path("m12 12.095l-5.5 3l5.5 3.3l5.5-3.3z");
}

.pcmju7bek {
  fill: var(--svg-color--f95d33, #f95d33);
  d: path("M8.501 11.256v2.785l3.5-1.85l5.5 3.05v-3.05l-5.5-2.905z");
}
</style><g class="ft5dv1b6b"><path class="o68ejzmrf"/><path class="pcmju7bek"/><path class="e-xlkgbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mudol2"} {...others} />);
}

export default Component;
