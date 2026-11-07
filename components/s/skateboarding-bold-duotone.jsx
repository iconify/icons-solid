import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7lpq_wf.css';
import '../../css/d/dtrmrxbrl.css';
import '../../css/a/a8727-o4f.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/js4i2vszx.css';
import '../../css/b/b6vb_rrtr.css';
import '../../css/t/tvxiapa3j.css';
import '../../css/n/nb-smibyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb7lpq_wf"/><path class="dtrmrxbrl"/><path class="a8727-o4f"/><g class="xtpeb-edw"><path class="js4i2vszx"/><path class="b6vb_rrtr"/><path class="tvxiapa3j"/><path class="nb-smibyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-bold-duotone"} {...others} />);
}

export default Component;
