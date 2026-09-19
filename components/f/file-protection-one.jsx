import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/k/ke3_mqb0c.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjkdWadun"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="ke3_mqb0c"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGjkdWadun)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-protection-one"} {...others} />);
}

export default Component;
