import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wnwrmzb4d.css';
import '../../css/d/d52l-tb8w.css';
import '../../css/f/fbcpkibjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="wnwrmzb4d"/><path class="d52l-tb8w"/><path class="fbcpkibjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:prescription"} {...others} />);
}

export default Component;
