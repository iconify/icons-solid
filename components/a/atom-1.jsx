import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/ul8dofb2c.css';
import '../../css/q/qk46o5bnp.css';
import '../../css/n/nc5-41bqe.css';
import '../../css/q/qfqfuabmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ul8dofb2c"/><path class="qk46o5bnp"/><path class="nc5-41bqe"/><path class="qfqfuabmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:atom-1"} {...others} />);
}

export default Component;
