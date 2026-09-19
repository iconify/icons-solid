import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/t-jsasqcq.css';
import '../../css/n/nxrnxobsk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwuglCczJ"><g class="ufeehvblu"><path class="t-jsasqcq"/><path class="nxrnxobsk"/></g></mask></defs><path mask="url(#SVGwuglCczJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:upside-down-face"} {...others} />);
}

export default Component;
