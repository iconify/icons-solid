import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnp5fsbrc.css';
import '../../css/s/swb1jq7dp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/t/t9iazqbwn.css';
import '../../css/m/mbo09cc4c.css';
import '../../css/m/mxpi62-vw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bnp5fsbrc"/><path class="swb1jq7dp"/><g class="jn8qy4bru"><path class="t9iazqbwn"/><path class="mbo09cc4c"/><path class="mxpi62-vw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ewe"} {...others} />);
}

export default Component;
