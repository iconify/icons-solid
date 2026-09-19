import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/n9u55jbjq.css';
import '../../css/c/cmtd2kblp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="n9u55jbjq"/><path class="cmtd2kblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:local-two"} {...others} />);
}

export default Component;
