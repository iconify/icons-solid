import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e95jrdbgt.css';
import '../../css/d/dsfqm53kn.css';
import '../../css/q/qh4eix07z.css';
import '../../css/i/i1-6abcsx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="e95jrdbgt"/><path class="dsfqm53kn"/><path class="qh4eix07z"/><path class="i1-6abcsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:road-sign"} {...others} />);
}

export default Component;
