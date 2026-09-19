import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b-csrt7jt.css';
import '../../css/z/z_n1vqbki.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeP9FDxMX"><g class="aql7dnt-u"><path class="b-csrt7jt"/><path class="z_n1vqbki"/></g></mask></defs><path mask="url(#SVGeP9FDxMX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:app-switch"} {...others} />);
}

export default Component;
