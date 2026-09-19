import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/i/iq51xwu9h.css';
import '../../css/b/be9mrtbtw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="iq51xwu9h"/><path class="be9mrtbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-four"} {...others} />);
}

export default Component;
