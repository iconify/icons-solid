import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqh4d4_cy.css';
import '../../css/o/odhc4kx7e.css';
import '../../css/m/m-735vbez.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/w/w0ce1bcaz.css';
import '../../css/q/q3t0wdb-z.css';
import '../../css/h/hjncyxbft.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uqh4d4_cy"/><path class="odhc4kx7e"/><path class="m-735vbez"/><g class="x8poo_bjf"><path class="w0ce1bcaz"/><path class="q3t0wdb-z"/><path class="hjncyxbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tropical-drink"} {...others} />);
}

export default Component;
