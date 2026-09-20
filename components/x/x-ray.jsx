import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1mtr3bbc.css';
import '../../css/a/aifge-2fg.css';
import '../../css/t/ts8su3r6c.css';
import '../../css/i/ih7rbqhsp.css';
import '../../css/q/qfe0n3l8d.css';
import '../../css/f/fbf91dd5n.css';
import '../../css/o/olivq4bgc.css';
import '../../css/j/jtz5zfp7u.css';
import '../../css/v/v441k4max.css';
import '../../css/o/ou_r8absw.css';
import '../../css/x/xne1zcc2i.css';
import '../../css/z/z04drlb1l.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/o/o5mzv5p-s.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGp8tmEdJl" class="u1mtr3bbc"/><path id="SVGmlRdLbzl" class="aifge-2fg"/><path id="SVG68ESZ6HC" class="ts8su3r6c"/><path id="SVGHYHReeKe" class="ih7rbqhsp"/><path id="SVG6EhxpbeQ" class="qfe0n3l8d"/></defs><rect class="fbf91dd5n"/><path class="olivq4bgc"/><path class="jtz5zfp7u"/><path class="v441k4max"/><path class="ou_r8absw"/><rect class="xne1zcc2i"/><g class="z04drlb1l"><use href="#SVGp8tmEdJl" class="j-npdpb0r"/><use href="#SVGmlRdLbzl" class="dvd6fwb9u"/><use href="#SVG68ESZ6HC" class="dvd6fwb9u"/><use href="#SVGHYHReeKe" class="dvd6fwb9u"/><use href="#SVG6EhxpbeQ" class="j-npdpb0r"/></g><g class="o5mzv5p-s"><use href="#SVGp8tmEdJl" class="j-npdpb0r"/><use href="#SVGmlRdLbzl" class="dvd6fwb9u"/><use href="#SVG68ESZ6HC" class="dvd6fwb9u"/><use href="#SVGHYHReeKe" class="dvd6fwb9u"/><use href="#SVG6EhxpbeQ" class="j-npdpb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:x-ray"} {...others} />);
}

export default Component;
