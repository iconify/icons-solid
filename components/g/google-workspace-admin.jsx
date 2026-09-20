import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb38kubsp.css';
import '../../css/o/orh3vwvtn.css';
import '../../css/y/ybpt-acew.css';
import '../../css/m/m-sco7b6z.css';

const viewBox = {"width":192,"height":192};
const content = `<path class="qb38kubsp"/><path class="orh3vwvtn"/><path class="ybpt-acew"/><path class="m-sco7b6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-workspace-admin"} {...others} />);
}

export default Component;
