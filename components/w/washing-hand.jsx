import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j1l7hc_-g.css';
import '../../css/o/oarp3cbgj.css';
import '../../css/o/oudat8b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j1l7hc_-g"/><path class="oarp3cbgj"/><path class="oudat8b8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:washing-hand"} {...others} />);
}

export default Component;
