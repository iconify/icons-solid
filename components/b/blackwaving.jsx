import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ichh20b6b.css';
import '../../css/f/f4xgot2-t.css';
import '../../css/s/sshvt2bwd.css';
import '../../css/d/dmmpmib0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ichh20b6b"/><path class="f4xgot2-t"/><path class="sshvt2bwd"/><path class="dmmpmib0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackwaving"} {...others} />);
}

export default Component;
