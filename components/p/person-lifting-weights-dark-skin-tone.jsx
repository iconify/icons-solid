import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khsi3si7g.css';
import '../../css/b/bbt4cvb0h.css';
import '../../css/y/ym8-nu1-z.css';
import '../../css/o/ol5bs9bwy.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/b/bhez61bon.css';
import '../../css/h/hi3cwbbvu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="khsi3si7g"/><g class="bbt4cvb0h"><circle class="ym8-nu1-z"/><path class="ol5bs9bwy"/></g><g class="x8poo_bjf"><circle class="ym8-nu1-z"/><path class="bhez61bon"/><path class="hi3cwbbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-lifting-weights-dark-skin-tone"} {...others} />);
}

export default Component;
