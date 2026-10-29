import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/innfxhbyy.css';
import '../../css/j/j-e6b1b1g.css';
import '../../css/c/cs4ylg4in.css';
import '../../css/y/ymgxlqiuj.css';
import '../../css/d/dw-2lsboz.css';
import '../../css/e/ekqcp-_vz.css';
import '../../css/e/e19buf11i.css';
import '../../css/d/dod5u1bpq.css';
import '../../css/u/urbwu2w8s.css';
import '../../css/t/tsx9vubmt.css';
import '../../css/o/o3ahdqh4i.css';
import '../../css/o/oz0120b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="innfxhbyy wm-shadow"/><path class="j-e6b1b1g wm-k"/><path class="cs4ylg4in wm-k"/><path class="wm-k ymgxlqiuj"/><path class="dw-2lsboz wm-k"/><path class="ekqcp-_vz wm-k"/><path class="e19buf11i wm-shine"/><path class="dod5u1bpq wm-k"/><path class="urbwu2w8s wm-k"/><path class="tsx9vubmt wm-k"/><path class="o3ahdqh4i wm-a"/><path class="oz0120b9j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:clipboard"} {...others} />);
}

export default Component;
