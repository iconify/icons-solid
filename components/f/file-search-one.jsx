import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/y/ylefotw6e.css';
import '../../css/h/hlbprpbiu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGu8Y0FYOt"><g class="rohhhzb0l"><path class="ftpkt8zyt"/><circle class="ylefotw6e"/><path class="hlbprpbiu"/></g></mask></defs><path mask="url(#SVGu8Y0FYOt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-search-one"} {...others} />);
}

export default Component;
