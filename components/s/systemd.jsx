import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3g7qk_6v.css';
import '../../css/q/q9xt_ac5x.css';
import '../../css/r/rj_fo2b2d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z3g7qk_6v"/><circle class="q9xt_ac5x"/><path class="rj_fo2b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:systemd"} {...others} />);
}

export default Component;
