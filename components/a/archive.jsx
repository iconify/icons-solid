import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/map3bfdxa.css';
import '../../css/o/ofnyteubk.css';
import '../../css/x/x7sqjac5b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="t_2lkqbxb"><path class="map3bfdxa"/><path class="ofnyteubk"/><path class="x7sqjac5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:archive"} {...others} />);
}

export default Component;
