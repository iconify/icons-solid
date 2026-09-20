import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny7ful4ak.css';
import '../../css/k/k0rgorb3x.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVGHrMFT39z" class="ny7ful4ak"/><path id="SVGwmoVmNsu" class="k0rgorb3x"/></defs><use href="#SVGHrMFT39z"/><use href="#SVGHrMFT39z"/><use href="#SVGHrMFT39z"/><use href="#SVGHrMFT39z"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:bookmark-crossed-2-16"} {...others} />);
}

export default Component;
