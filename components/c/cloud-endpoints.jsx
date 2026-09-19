import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szd676lcr.css';
import '../../css/m/mgm68nbdh.css';
import '../../css/t/tg78mwbgu.css';
import '../../css/j/j4bam6bye.css';
import '../../css/m/mw25ogbwg.css';
import '../../css/s/slx8bnllt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szd676lcr"/><path class="mgm68nbdh"/><path class="tg78mwbgu"/><path class="j4bam6bye"/><path class="mw25ogbwg"/><path class="slx8bnllt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-endpoints"} {...others} />);
}

export default Component;
