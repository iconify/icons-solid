import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/z5oavtbwc.css';
import '../../css/i/ic94bsbss.css';
import '../../css/s/sw_zfibgl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGN8BMLZAA"><g class="ufeehvblu"><path class="z5oavtbwc"/><path class="ic94bsbss"/><path class="sw_zfibgl"/></g></mask></defs><path mask="url(#SVGN8BMLZAA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:map-distance"} {...others} />);
}

export default Component;
