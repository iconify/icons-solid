import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lelvr5blt.css';
import '../../css/t/troxz-_lw.css';
import '../../css/p/pu0y4pgpa.css';
import '../../css/p/p48ewxbal.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="lelvr5blt"/><path class="troxz-_lw"/><path class="pu0y4pgpa"/><path class="p48ewxbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:pin-fill"} {...others} />);
}

export default Component;
