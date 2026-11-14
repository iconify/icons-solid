import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gbc0neese {
  d: path("M2.5 6.25L10 10.5l7.5-4.25M10 10.5V19m5-1.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.idnnbfb2j {
  d: path("M12.211 17.747L10 19l-7.5-4.25v-8.5L10 2l7.5 4.25v5.98");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="idnnbfb2j"/><path class="gbc0neese"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:api-lock"} {...others} />);
}

export default Component;
