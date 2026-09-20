import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxn1shbqb.css';
import '../../css/q/qx-irq_su.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/z/zyfl6vbby.css';
import '../../css/d/dimxmhv3l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vxn1shbqb"/><path class="qx-irq_su"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="zyfl6vbby"/><path class="dimxmhv3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-curly-hair"} {...others} />);
}

export default Component;
