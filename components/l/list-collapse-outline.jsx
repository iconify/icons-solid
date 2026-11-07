import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciiy6eb2c.css';
import '../../css/u/u03upyb7p.css';
import '../../css/b/bg1rqybfc.css';
import '../../css/w/wabinmgoi.css';
import '../../css/t/t5ovb-bau.css';
import '../../css/z/zi6r62nwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ciiy6eb2c"/><path class="u03upyb7p"/><path class="bg1rqybfc"/><path class="wabinmgoi"/><path class="t5ovb-bau"/><path class="zi6r62nwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-collapse-outline"} {...others} />);
}

export default Component;
