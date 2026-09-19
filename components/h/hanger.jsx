import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iavqdjdgi.css';
import '../../css/n/npiz6qlvn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGblMKScBJ"><g class="aql7dnt-u"><path clip-rule="evenodd" class="iavqdjdgi"/><path class="npiz6qlvn"/></g></mask></defs><path mask="url(#SVGblMKScBJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hanger"} {...others} />);
}

export default Component;
