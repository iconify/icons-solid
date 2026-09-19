import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qwi6hgibi.css';
import '../../css/v/vvao778zs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkTqsQtbP"><g class="aql7dnt-u"><path class="qwi6hgibi"/><path class="vvao778zs"/></g></mask></defs><path mask="url(#SVGkTqsQtbP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dvi"} {...others} />);
}

export default Component;
