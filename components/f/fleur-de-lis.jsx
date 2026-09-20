import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7sbyqb3w.css';
import '../../css/f/frccn5xec.css';
import '../../css/m/m1_20ublh.css';
import '../../css/p/pm3nzbc5u.css';
import '../../css/f/f6cutbbdd.css';
import '../../css/u/urqkv59yr.css';
import '../../css/j/ji2uu8nkx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l7sbyqb3w"/><path class="frccn5xec"/><path class="m1_20ublh"/><path class="pm3nzbc5u"/><g class="f6cutbbdd"><path class="urqkv59yr"/><path class="ji2uu8nkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fleur-de-lis"} {...others} />);
}

export default Component;
