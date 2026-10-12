import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auh81hbuq {
  d: path("m12.7 3.02l7.85 2.96l.7.27V17.5l-.7.28l-7.85 3.19l-.7.28l-.7-.28l-7.85-3.19l-.7-.28V6.25l.7-.27l7.85-2.96l.7-.27z");
}

.fax-h90di {
  d: path("m3 6.5l9 3.5l9-3.5M12 10v11M3 10l9 3.5l9-3.5m-5.75 10v-3.25l2-.75v3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="auh81hbuq"/><path class="fax-h90di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kaaba-sharp"} {...others} />);
}

export default Component;
