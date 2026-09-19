import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/o/oq4n5n2mn.css';
import '../../css/h/hbjm60bpx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGc9QjKbht"><g class="rohhhzb0l"><path class="ftpkt8zyt"/><circle class="oq4n5n2mn"/><path class="hbjm60bpx"/></g></mask></defs><path mask="url(#SVGc9QjKbht)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-settings-one"} {...others} />);
}

export default Component;
