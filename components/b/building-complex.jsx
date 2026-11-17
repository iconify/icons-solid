import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ra5mc0byk.css';
import '../../css/l/ldmjixbkh.css';
import '../../css/l/lyaksxehd.css';
import '../../css/h/h1--46pep.css';
import '../../css/s/s5ch0vb8u.css';
import '../../css/l/lxvtb1d_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ra5mc0byk"/><path class="ldmjixbkh"/><path class="lyaksxehd"/><path class="h1--46pep"/><path class="s5ch0vb8u"/><path class="lxvtb1d_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:building-complex"} {...others} />);
}

export default Component;
