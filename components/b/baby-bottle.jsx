import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soxjt8b0n.css';
import '../../css/s/sbe9w354g.css';
import '../../css/t/t4n9jgbvp.css';
import '../../css/l/lfgk-3bym.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/z/znnuutb9e.css';
import '../../css/n/nu1sv4boz.css';
import '../../css/d/dppltr_xw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="soxjt8b0n"/><path class="sbe9w354g"/><path class="t4n9jgbvp"/><path class="lfgk-3bym"/><g class="x8poo_bjf"><path class="znnuutb9e"/><path class="nu1sv4boz"/><path class="dppltr_xw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:baby-bottle"} {...others} />);
}

export default Component;
