import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpdq4hb-m.css';
import '../../css/l/l0r8j72es.css';
import '../../css/m/m40vt8b2k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX6GfSdon"><g class="lpdq4hb-m"><path class="l0r8j72es"/><path class="m40vt8b2k"/></g></mask></defs><path mask="url(#SVGX6GfSdon)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:xigua"} {...others} />);
}

export default Component;
