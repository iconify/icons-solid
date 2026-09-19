import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xitc-6bqz.css';
import '../../css/o/o5ivlpbrd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGU0JlVdWH"><g class="aql7dnt-u"><path clip-rule="evenodd" class="xitc-6bqz"/><path class="o5ivlpbrd"/></g></mask></defs><path mask="url(#SVGU0JlVdWH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:noodles"} {...others} />);
}

export default Component;
