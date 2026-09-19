import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/c/c2tc443pc.css';
import '../../css/p/p89mexpzg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="c2tc443pc"/><path class="p89mexpzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:taurus"} {...others} />);
}

export default Component;
