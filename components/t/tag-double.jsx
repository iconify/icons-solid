import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q337fgbpm.css';
import '../../css/a/a91wsbs9p.css';
import '../../css/x/xjl4jdb5m.css';
import '../../css/f/f5a45hbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q337fgbpm"/><path class="a91wsbs9p"/><path class="xjl4jdb5m"/><path class="f5a45hbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:tag-double"} {...others} />);
}

export default Component;
