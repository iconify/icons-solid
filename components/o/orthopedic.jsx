import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/x98exbccb.css';
import '../../css/f/fs4btdpbi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGms8qbAy"><g class="rohhhzb0l"><path clip-rule="evenodd" class="x98exbccb"/><path class="fs4btdpbi"/></g></mask></defs><path mask="url(#SVGGms8qbAy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:orthopedic"} {...others} />);
}

export default Component;
