import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qb6k975mv {
  d: path("M3.5 11h4v9.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xejipab8j {
  d: path("m6.75 10.701l11.258-6.5l1.5 2.598l-11.258 6.5Zm3.681-2.125l1.5 2.598m2.18-4.723l1.5 2.598");
}
</style><g class="ulnmmdpxh"><path class="qb6k975mv"/><path class="xejipab8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:factory-gate"} {...others} />);
}

export default Component;
