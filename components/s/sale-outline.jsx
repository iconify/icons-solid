import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yadkeksry.css';
import '../../css/g/gv5s0h4bv.css';
import '../../css/i/i-h5fzmsn.css';
import '../../css/w/wf_6ujbcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yadkeksry"/><path clip-rule="evenodd" class="gv5s0h4bv"/><path class="i-h5fzmsn"/><path class="wf_6ujbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-outline"} {...others} />);
}

export default Component;
