import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.btyxfof2z {
  fill: var(--svg-color--5fcade, #5FCADE);
  d: path("M7.882 9.647h9.412v4.706H7.882z");
}

.ft5dv1b6b {
  fill: none;
}

.iitnw-bli {
  fill: var(--svg-color--5fcade, #5FCADE);
  d: path("M2 9.647h4.706v4.706H2z");
}

.ve0kr-ovj {
  fill: var(--svg-color--02a6c2, #02A6C2);
  d: path("M7.882 3.176H22v4.706H7.882z");
}

.yk-qts5-r {
  fill: var(--svg-color--abebf4, #ABEBF4);
  d: path("M7.882 16.118h4.706v4.706H7.882z");
}
</style><g class="ft5dv1b6b"><path class="ve0kr-ovj"/><path class="btyxfof2z"/><path class="yk-qts5-r"/><path class="iitnw-bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:bull"} {...others} />);
}

export default Component;
