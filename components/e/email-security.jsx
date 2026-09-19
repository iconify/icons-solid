import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/b/bygzykb_g.css';
import '../../css/z/z78yszbru.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgESlaeXW"><g class="aql7dnt-u"><path class="qtgswnn4u"/><path class="bygzykb_g"/><path class="z78yszbru"/></g></mask></defs><path mask="url(#SVGgESlaeXW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:email-security"} {...others} />);
}

export default Component;
