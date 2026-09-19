import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nvxkylbdg.css';
import '../../css/y/yyx_3z7mv.css';
import '../../css/c/c6nrszujt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuSC5DboZ"><g class="v3_i3wktz"><path class="nvxkylbdg"/><path clip-rule="evenodd" class="yyx_3z7mv"/><path class="c6nrszujt"/></g></mask></defs><path mask="url(#SVGuSC5DboZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:open-door"} {...others} />);
}

export default Component;
