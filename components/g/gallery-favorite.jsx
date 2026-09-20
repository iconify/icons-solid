import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gbcg_ebez.css';
import '../../css/c/cx3v-gb9c.css';
import '../../css/o/otv2qb06x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gbcg_ebez"/><path class="cx3v-gb9c"/><path class="otv2qb06x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-favorite"} {...others} />);
}

export default Component;
