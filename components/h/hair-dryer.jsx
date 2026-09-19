import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/orqm88b8k.css';
import '../../css/d/d_lx0tbhx.css';
import '../../css/m/m--su9b4u.css';
import '../../css/m/m_ahhtk5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgwq2vbFe"><g class="aql7dnt-u"><path class="orqm88b8k"/><path class="d_lx0tbhx"/><path class="m--su9b4u"/><path class="m_ahhtk5h"/></g></mask></defs><path mask="url(#SVGgwq2vbFe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hair-dryer"} {...others} />);
}

export default Component;
