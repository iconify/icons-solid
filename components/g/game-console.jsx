import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwkxb0b3i.css';
import '../../css/t/thk4m1bmj.css';
import '../../css/q/qi3c12wbg.css';
import '../../css/f/f585pj80o.css';
import '../../css/n/nn6hx2bue.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGY7BuOdZD"><g class="ft5dv1b6b"><rect class="mwkxb0b3i"/><path class="thk4m1bmj"/><path class="qi3c12wbg"/><circle class="f585pj80o"/><circle class="nn6hx2bue"/></g></mask></defs><path mask="url(#SVGY7BuOdZD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:game-console"} {...others} />);
}

export default Component;
