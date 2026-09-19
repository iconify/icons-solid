import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ikbleibbz.css';
import '../../css/u/ue1cjpbqo.css';
import '../../css/l/lop3_mics.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMw63ncxY"><g class="aql7dnt-u"><circle class="ikbleibbz"/><path class="ue1cjpbqo"/><path class="lop3_mics"/></g></mask></defs><path mask="url(#SVGMw63ncxY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:edit-name"} {...others} />);
}

export default Component;
