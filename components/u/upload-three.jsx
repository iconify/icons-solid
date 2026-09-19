import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m2blynbna.css';
import '../../css/j/jb4axvbld.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYX7KscDr"><g class="ufeehvblu"><path class="m2blynbna"/><path class="jb4axvbld"/></g></mask></defs><path mask="url(#SVGYX7KscDr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:upload-three"} {...others} />);
}

export default Component;
