import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg8yk53ur.css';
import '../../css/f/fxp0a0j1h.css';
import '../../css/v/v8-e70byv.css';
import '../../css/l/lt8bh8bex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hg8yk53ur"/><path class="fxp0a0j1h"/><path class="v8-e70byv"/><path class="lt8bh8bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:google"} {...others} />);
}

export default Component;
