import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ecqskqbjc.css';
import '../../css/v/vhhxkzb1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMXrrCcnc"><g class="v3_i3wktz"><path class="ecqskqbjc"/><path class="vhhxkzb1a"/></g></mask></defs><path mask="url(#SVGMXrrCcnc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flask"} {...others} />);
}

export default Component;
