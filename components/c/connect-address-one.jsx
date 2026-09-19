import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hx-qo_bxx.css';
import '../../css/m/mes17gbuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGk2Kleni"><g class="aql7dnt-u"><path class="hx-qo_bxx"/><circle class="mes17gbuk"/></g></mask></defs><path mask="url(#SVGGk2Kleni)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:connect-address-one"} {...others} />);
}

export default Component;
