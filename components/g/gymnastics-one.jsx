import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/n/nnjcrobzw.css';
import '../../css/l/ln6f3q98l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="nnjcrobzw"/><path class="ln6f3q98l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gymnastics-one"} {...others} />);
}

export default Component;
