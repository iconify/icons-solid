import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdgnd1ruk.css';
import '../../css/s/spfabu0wn.css';
import '../../css/d/dx5etsbqf.css';
import '../../css/h/hgbpbsbyx.css';
import '../../css/c/c3jc1-jnh.css';
import '../../css/q/q5rbx95gs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7QfppczE"><g class="ft5dv1b6b"><path class="cdgnd1ruk"/><path class="spfabu0wn"/><circle class="dx5etsbqf"/><circle class="hgbpbsbyx"/><circle class="c3jc1-jnh"/><circle class="q5rbx95gs"/></g></mask></defs><path mask="url(#SVG7QfppczE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:orange"} {...others} />);
}

export default Component;
