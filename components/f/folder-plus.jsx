import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/q/q37jtebrq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6YB6Mb1Z"><g class="rohhhzb0l"><path class="zbocpbbaf"/><path class="q37jtebrq"/></g></mask></defs><path mask="url(#SVG6YB6Mb1Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-plus"} {...others} />);
}

export default Component;
