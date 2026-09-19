import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/i/iaejugcxy.css';
import '../../css/i/idxsszrzn.css';
import '../../css/o/ofdd852ie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEqx9mcRF"><g class="ufeehvblu"><path class="iaejugcxy"/><path class="idxsszrzn"/><path class="ofdd852ie"/></g></mask></defs><path mask="url(#SVGEqx9mcRF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:notebook"} {...others} />);
}

export default Component;
