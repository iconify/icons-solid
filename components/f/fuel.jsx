import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u27m59bdu.css';
import '../../css/j/j9b07fx4f.css';
import '../../css/o/omd0cyr4f.css';
import '../../css/z/zv333xb_h.css';
import '../../css/o/o29-pfbzm.css';
import '../../css/q/qbw6fyblq.css';
import '../../css/a/a0cwr6bbn.css';
import '../../css/x/xro53ob2l.css';
import '../../css/z/z3rxmgd0r.css';
import '../../css/y/yqk2sxkff.css';
import '../../css/e/exx2szb8s.css';
import '../../css/g/g6jkhtbcc.css';
import '../../css/s/sok-jbcwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u27m59bdu wm-shadow"/><path class="j9b07fx4f wm-k"/><path class="omd0cyr4f wm-k"/><path class="wm-k zv333xb_h"/><path class="o29-pfbzm wm-k"/><path class="qbw6fyblq wm-k"/><path class="a0cwr6bbn wm-shine"/><path class="wm-k xro53ob2l"/><path class="wm-k z3rxmgd0r"/><path class="wm-k yqk2sxkff"/><path class="exx2szb8s wm-k"/><path class="g6jkhtbcc wm-k"/><path class="sok-jbcwb wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:fuel"} {...others} />);
}

export default Component;
