import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rx93in87k.css';
import '../../css/s/s3nq39rtz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rx93in87k"/><path class="s3nq39rtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:quadrangular-pyramid"} {...others} />);
}

export default Component;
