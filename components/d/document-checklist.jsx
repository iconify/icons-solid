import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-fiunb8n {
  d: path("M5 3.5h14v17H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utwoapf-j {
  d: path("m8.5 9l1.5 1.5l2.5-3m-4 7.5l1.5 1.5l2.5-3M14 9h2m-2 6h2");
}
</style><g class="ulnmmdpxh"><path class="c-fiunb8n"/><path class="utwoapf-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:document-checklist"} {...others} />);
}

export default Component;
