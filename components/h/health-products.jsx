import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dj-4ukbbc.css';
import '../../css/w/wjvvj7tqb.css';
import '../../css/y/yn5ovibru.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGI8ej4d6U"><g class="aql7dnt-u"><path class="dj-4ukbbc"/><path class="wjvvj7tqb"/><circle class="yn5ovibru"/></g></mask></defs><path mask="url(#SVGI8ej4d6U)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:health-products"} {...others} />);
}

export default Component;
