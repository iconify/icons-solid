import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y9h8w8b0s.css';
import '../../css/v/vts2zgh9v.css';
import '../../css/w/wmwy0wzyp.css';
import '../../css/d/d13yejvim.css';
import '../../css/o/ocjy5-mgq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="y9h8w8b0s"/><path class="vts2zgh9v"/><path class="wmwy0wzyp"/><path class="d13yejvim"/><path class="ocjy5-mgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:receipt-cross"} {...others} />);
}

export default Component;
