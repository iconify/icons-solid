import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/e/eo9hd3bdj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGu4ecWcln"><g class="aql7dnt-u"><circle class="a_ete1bey"/><path clip-rule="evenodd" class="eo9hd3bdj"/></g></mask></defs><path mask="url(#SVGu4ecWcln)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:handle-b"} {...others} />);
}

export default Component;
