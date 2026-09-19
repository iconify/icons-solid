import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/i/io25jxifj.css';
import '../../css/g/gk58d4b-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="io25jxifj"/><path class="gk58d4b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bib"} {...others} />);
}

export default Component;
