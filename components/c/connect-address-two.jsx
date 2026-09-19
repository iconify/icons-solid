import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wrhmw8bod.css';
import '../../css/m/mes17gbuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtLx6gcYu"><g class="aql7dnt-u"><path class="wrhmw8bod"/><circle class="mes17gbuk"/></g></mask></defs><path mask="url(#SVGtLx6gcYu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:connect-address-two"} {...others} />);
}

export default Component;
