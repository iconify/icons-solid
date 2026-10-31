import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/ps53hqopa.css';
import '../../css/g/gme3y9biz.css';
import '../../css/p/pyar3wb_o.css';
import '../../css/t/th4c5pbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ps53hqopa wm-shadow"/><path class="gme3y9biz wm-shadow"/><path class="pyar3wb_o"/><path class="th4c5pbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fish"} {...others} />);
}

export default Component;
