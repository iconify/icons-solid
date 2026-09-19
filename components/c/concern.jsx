import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/l/lt9927b3v.css';
import '../../css/w/ws63ig51q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGl4rQrcUi"><g class="csw0kbbpv"><path class="lt9927b3v"/><path class="ws63ig51q"/></g></mask></defs><path mask="url(#SVGl4rQrcUi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:concern"} {...others} />);
}

export default Component;
