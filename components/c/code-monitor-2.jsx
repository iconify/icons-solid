import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/al6fp8bvh.css';
import '../../css/y/yl0waibaz.css';
import '../../css/h/hldpyqb4c.css';
import '../../css/b/biyzyno2u.css';
import '../../css/g/g3fu8gbay.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="al6fp8bvh"/><path class="yl0waibaz"/><path class="hldpyqb4c"/><path class="biyzyno2u"/><path class="g3fu8gbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:code-monitor-2"} {...others} />);
}

export default Component;
