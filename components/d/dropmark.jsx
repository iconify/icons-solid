import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":348};
const content = `<style>.ef_hqztbd {
  d: path("M128 0S0 91.067 0 219.067c0 70.704 57.296 128 128 128s128-57.296 128-128C256 91.067 128 0 128 0m0 293.312l-68.68-79.051h30.61v-90.308h76.142v90.308h30.609z");
}

.usvyhmbzy {
  fill: var(--svg-color--38dedf, #38dedf);
}
</style><defs><path id="SVGTs95Vd5s" class="ef_hqztbd"/></defs><use href="#SVGTs95Vd5s" class="usvyhmbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:dropmark"} {...others} />);
}

export default Component;
