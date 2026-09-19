import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/glspuf6tj.css';
import '../../css/j/jjxd41b4n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="glspuf6tj"/><path class="jjxd41b4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:spider-man"} {...others} />);
}

export default Component;
