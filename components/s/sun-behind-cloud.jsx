import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe4t1tbur.css';
import '../../css/w/whfujdbyc.css';
import '../../css/r/rhvkpacim.css';
import '../../css/d/dv-83lguv.css';
import '../../css/x/x57embbjv.css';
import '../../css/c/c25egubhb.css';
import '../../css/t/tpr_m7gnf.css';
import '../../css/v/vecxc795p.css';
import '../../css/f/fnx-q-lro.css';
import '../../css/b/bwsenb66c.css';
import '../../css/g/gbvj6gg2a.css';
import '../../css/s/sa80hl18v.css';
import '../../css/g/gy6l7f3vy.css';
import '../../css/f/ftsucsb1v.css';
import '../../css/v/vi2k6vb7s.css';
import '../../css/u/utguyrbtj.css';
import '../../css/j/jngi9ybdh.css';
import '../../css/j/jsb-r6b8a.css';
import '../../css/e/e1sskua1e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qe4t1tbur"/><path class="whfujdbyc"/><path class="rhvkpacim"/><path class="dv-83lguv"/><path class="x57embbjv"/><path class="c25egubhb"/><path class="tpr_m7gnf"/><path class="vecxc795p"/><path class="fnx-q-lro"/><path class="bwsenb66c"/><path class="gbvj6gg2a"/><path class="sa80hl18v"/><path class="gy6l7f3vy"/><path class="ftsucsb1v"/><path class="vi2k6vb7s"/><path class="utguyrbtj"/><path class="jngi9ybdh"/><path class="jsb-r6b8a"/><path class="e1sskua1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:sun-behind-cloud"} {...others} />);
}

export default Component;
