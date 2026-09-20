import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/a/a5uh-zb9n.css';
import '../../css/n/no99ojxxs.css';
import '../../css/f/f5o-f7bmk.css';
import '../../css/l/lgd5f5bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="a5uh-zb9n"/><path class="no99ojxxs"/><path class="f5o-f7bmk"/><path class="lgd5f5bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:human-resources-hierarchy-1"} {...others} />);
}

export default Component;
