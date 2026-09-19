import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg7j1hkpt.css';
import '../../css/y/y1ghfdd7v.css';
import '../../css/w/w3nzclc_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dg7j1hkpt"/><rect class="y1ghfdd7v"/><circle class="w3nzclc_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:linkedin-fill"} {...others} />);
}

export default Component;
