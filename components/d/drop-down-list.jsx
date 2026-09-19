import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/d/d8561dbcl.css';
import '../../css/s/sur6g4xqv.css';
import '../../css/r/rw4ic0bsf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="d8561dbcl"/><path class="sur6g4xqv"/><path class="rw4ic0bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:drop-down-list"} {...others} />);
}

export default Component;
