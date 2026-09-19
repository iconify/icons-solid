import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yzx7n0beg.css';
import '../../css/f/fsjiiebup.css';
import '../../css/k/kmrjihb3w.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yzx7n0beg"/><path class="fsjiiebup"/><path class="kmrjihb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-rat"} {...others} />);
}

export default Component;
