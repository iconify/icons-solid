import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lg30_dbnu {
  d: path("M9.75 16.25L12 18.5l2.25-2.25");
}

.r0a37eb2r {
  d: path("m3.5 2.5l1.5 4h14l1.5-4m-17 15l1.5 4h14l1.5-4M12 9.25v9.25m-2.25-7L12 9.25l2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r0a37eb2r"/><path class="lg30_dbnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pumped-storage"} {...others} />);
}

export default Component;
