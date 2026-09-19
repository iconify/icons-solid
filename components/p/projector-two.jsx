import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r5bdwzbjs.css';
import '../../css/e/edfg9vbrl.css';
import '../../css/c/c047ylp0r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="r5bdwzbjs"/><path class="edfg9vbrl"/><circle class="c047ylp0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:projector-two"} {...others} />);
}

export default Component;
