import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s51r0hqxg.css';
import '../../css/m/m93jkqbyk.css';
import '../../css/w/wxpb20b0f.css';
import '../../css/e/eyqtf5b_s.css';
import '../../css/f/fx2ljzvfq.css';
import '../../css/h/h_b3e1eww.css';
import '../../css/y/yv_avebuf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnveqRbkz"><g class="ft5dv1b6b"><path class="s51r0hqxg"/><path clip-rule="evenodd" class="m93jkqbyk"/><path class="wxpb20b0f"/><path clip-rule="evenodd" class="eyqtf5b_s"/><path class="fx2ljzvfq"/><path clip-rule="evenodd" class="h_b3e1eww"/><path class="yv_avebuf"/></g></mask></defs><path mask="url(#SVGnveqRbkz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:router-one"} {...others} />);
}

export default Component;
