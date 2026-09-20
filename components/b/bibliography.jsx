import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diuciquml.css';
import '../../css/q/qy_x9db4g.css';
import '../../css/o/olk_csb2h.css';
import '../../css/z/zsw5drbid.css';
import '../../css/w/wzubvnb2j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="diuciquml"/><path class="qy_x9db4g"/><path class="olk_csb2h"/><path class="zsw5drbid"/><path class="wzubvnb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bibliography"} {...others} />);
}

export default Component;
