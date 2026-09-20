import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ns8oq8bti.css';
import '../../css/d/dt8vovbnx.css';
import '../../css/g/g69_idzws.css';
import '../../css/c/c6aq6y_7c.css';
import '../../css/a/a0zsvfb2y.css';
import '../../css/a/a_k723_pl.css';
import '../../css/b/bkbtg_b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ns8oq8bti"/><path class="dt8vovbnx"/><path class="g69_idzws"/><path class="c6aq6y_7c"/><path class="a0zsvfb2y"/><path class="a_k723_pl"/><path class="bkbtg_b4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:email-laptop"} {...others} />);
}

export default Component;
