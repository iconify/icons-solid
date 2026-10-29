import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4cns34zq.css';
import '../../css/j/jqgwybciu.css';
import '../../css/v/v9hoqilmg.css';
import '../../css/z/zoehqxb0r.css';
import '../../css/d/dzvbtkwni.css';
import '../../css/e/eoo1d6krt.css';
import '../../css/b/bo588kb5l.css';
import '../../css/d/dxfze3b3n.css';
import '../../css/j/j683s9exu.css';
import '../../css/l/lai1a0ldm.css';
import '../../css/h/hau_3fbux.css';
import '../../css/t/tu165kbjv.css';
import '../../css/o/oq7_94b4f.css';
import '../../css/f/fi4zdx03y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y4cns34zq"/><path class="jqgwybciu wm-k"/><path class="v9hoqilmg wm-k"/><path class="wm-k zoehqxb0r"/><path class="dzvbtkwni wm-k"/><path class="eoo1d6krt wm-shine"/><path class="bo588kb5l wm-k"/><path class="dxfze3b3n wm-a"/><path class="j683s9exu wm-a"/><path class="lai1a0ldm wm-a"/><path class="hau_3fbux wm-a"/><path class="tu165kbjv wm-a"/><path class="oq7_94b4f wm-a"/><path class="fi4zdx03y wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:shankh"} {...others} />);
}

export default Component;
