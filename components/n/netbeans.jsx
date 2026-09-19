import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc7u31bbl.css';
import '../../css/f/fhrja1boe.css';
import '../../css/n/nfqfbactw.css';
import '../../css/t/t6mjbcbfp.css';
import '../../css/n/n499ohb4m.css';
import '../../css/s/sal6g5b7z.css';
import '../../css/y/y4dtpnbbn.css';
import '../../css/j/jcqhjnblz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pc7u31bbl"/><path class="fhrja1boe"/><path class="nfqfbactw"/><path class="t6mjbcbfp"/><path class="n499ohb4m"/><path class="sal6g5b7z"/><path class="y4dtpnbbn"/><path class="jcqhjnblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:netbeans"} {...others} />);
}

export default Component;
