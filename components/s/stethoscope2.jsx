import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmqwcdbtg.css';
import '../../css/s/s8qwrwx2q.css';
import '../../css/b/blld_dbmt.css';
import '../../css/i/ifrkxilie.css';
import '../../css/f/fch-4rbdw.css';
import '../../css/y/y8_ytvbjl.css';
import '../../css/q/q4w0p54su.css';
import '../../css/r/riepr6b8n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xmqwcdbtg"/><circle class="s8qwrwx2q"/><circle class="blld_dbmt"/><ellipse class="ifrkxilie"/><path class="fch-4rbdw"/><path class="y8_ytvbjl"/><path class="q4w0p54su"/><path class="riepr6b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stethoscope2"} {...others} />);
}

export default Component;
