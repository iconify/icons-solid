import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ifj0fdciu.css';
import '../../css/e/es7v8f_kc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcWC6kU5w"><g class="aql7dnt-u"><path class="ifj0fdciu"/><path class="es7v8f_kc"/></g></mask></defs><path mask="url(#SVGcWC6kU5w)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chair-one"} {...others} />);
}

export default Component;
