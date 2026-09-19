import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yiag5_fex.css';
import '../../css/u/u7hxjrb-n.css';
import '../../css/w/wbkv-oqbv.css';
import '../../css/i/iil50ac7m.css';
import '../../css/r/r95t_hbga.css';
import '../../css/t/t7ruonb1p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh6wODbfM"><g class="ft5dv1b6b"><rect class="yiag5_fex"/><circle class="u7hxjrb-n"/><circle class="wbkv-oqbv"/><path class="iil50ac7m"/><path class="r95t_hbga"/><path class="t7ruonb1p"/></g></mask></defs><path mask="url(#SVGh6wODbfM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gamepad"} {...others} />);
}

export default Component;
