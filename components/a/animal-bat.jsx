import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cpbthacsx.css';
import '../../css/r/rs9wcr-hb.css';
import '../../css/l/l61t4-b2q.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cpbthacsx"/><path class="rs9wcr-hb"/><path class="l61t4-b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-bat"} {...others} />);
}

export default Component;
